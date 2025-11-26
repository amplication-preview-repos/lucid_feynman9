import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AccountMembershipController } from "../accountMembership.controller";
import { AccountMembershipService } from "../accountMembership.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  isActive: "true",
  joinedAt: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  isActive: "true",
  joinedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    isActive: "true",
    joinedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  isActive: "true",
  joinedAt: new Date(),
};

const service = {
  createAccountMembership() {
    return CREATE_RESULT;
  },
  accountMemberships: () => FIND_MANY_RESULT,
  accountMembership: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AccountMembership", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AccountMembershipService,
          useValue: service,
        },
      ],
      controllers: [AccountMembershipController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /accountMemberships", async () => {
    await request(app.getHttpServer())
      .post("/accountMemberships")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        joinedAt: CREATE_RESULT.joinedAt.toISOString(),
      });
  });

  test("GET /accountMemberships", async () => {
    await request(app.getHttpServer())
      .get("/accountMemberships")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          joinedAt: FIND_MANY_RESULT[0].joinedAt.toISOString(),
        },
      ]);
  });

  test("GET /accountMemberships/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accountMemberships"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /accountMemberships/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/accountMemberships"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        joinedAt: FIND_ONE_RESULT.joinedAt.toISOString(),
      });
  });

  test("POST /accountMemberships existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/accountMemberships")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        joinedAt: CREATE_RESULT.joinedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/accountMemberships")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

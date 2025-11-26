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
import { AiExtractionController } from "../aiExtraction.controller";
import { AiExtractionService } from "../aiExtraction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actorReviewed: "true",
  amount: 42.424242424,
  confidenceScore: 42.42,
  currency: "exampleCurrency",
  description: "exampleDescription",
  extractedAt: new Date(),
  id: "exampleId",
  reviewerId: "exampleReviewerId",
  shopName: "exampleShopName",
};
const CREATE_RESULT = {
  actorReviewed: "true",
  amount: 42.424242424,
  confidenceScore: 42.42,
  currency: "exampleCurrency",
  description: "exampleDescription",
  extractedAt: new Date(),
  id: "exampleId",
  reviewerId: "exampleReviewerId",
  shopName: "exampleShopName",
};
const FIND_MANY_RESULT = [
  {
    actorReviewed: "true",
    amount: 42.424242424,
    confidenceScore: 42.42,
    currency: "exampleCurrency",
    description: "exampleDescription",
    extractedAt: new Date(),
    id: "exampleId",
    reviewerId: "exampleReviewerId",
    shopName: "exampleShopName",
  },
];
const FIND_ONE_RESULT = {
  actorReviewed: "true",
  amount: 42.424242424,
  confidenceScore: 42.42,
  currency: "exampleCurrency",
  description: "exampleDescription",
  extractedAt: new Date(),
  id: "exampleId",
  reviewerId: "exampleReviewerId",
  shopName: "exampleShopName",
};

const service = {
  createAiExtraction() {
    return CREATE_RESULT;
  },
  aiExtractions: () => FIND_MANY_RESULT,
  aiExtraction: ({ where }: { where: { id: string } }) => {
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

describe("AiExtraction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AiExtractionService,
          useValue: service,
        },
      ],
      controllers: [AiExtractionController],
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

  test("POST /aiExtractions", async () => {
    await request(app.getHttpServer())
      .post("/aiExtractions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        extractedAt: CREATE_RESULT.extractedAt.toISOString(),
      });
  });

  test("GET /aiExtractions", async () => {
    await request(app.getHttpServer())
      .get("/aiExtractions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          extractedAt: FIND_MANY_RESULT[0].extractedAt.toISOString(),
        },
      ]);
  });

  test("GET /aiExtractions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/aiExtractions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /aiExtractions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/aiExtractions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        extractedAt: FIND_ONE_RESULT.extractedAt.toISOString(),
      });
  });

  test("POST /aiExtractions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/aiExtractions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        extractedAt: CREATE_RESULT.extractedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/aiExtractions")
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

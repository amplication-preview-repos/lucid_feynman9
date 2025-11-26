import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSettingServiceBase } from "./base/userSetting.service.base";

@Injectable()
export class UserSettingService extends UserSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

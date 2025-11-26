import { Module } from "@nestjs/common";
import { UserSettingModuleBase } from "./base/userSetting.module.base";
import { UserSettingService } from "./userSetting.service";
import { UserSettingController } from "./userSetting.controller";
import { UserSettingResolver } from "./userSetting.resolver";

@Module({
  imports: [UserSettingModuleBase],
  controllers: [UserSettingController],
  providers: [UserSettingService, UserSettingResolver],
  exports: [UserSettingService],
})
export class UserSettingModule {}

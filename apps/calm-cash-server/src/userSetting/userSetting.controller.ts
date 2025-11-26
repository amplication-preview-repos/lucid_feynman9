import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSettingService } from "./userSetting.service";
import { UserSettingControllerBase } from "./base/userSetting.controller.base";

@swagger.ApiTags("userSettings")
@common.Controller("userSettings")
export class UserSettingController extends UserSettingControllerBase {
  constructor(protected readonly service: UserSettingService) {
    super(service);
  }
}

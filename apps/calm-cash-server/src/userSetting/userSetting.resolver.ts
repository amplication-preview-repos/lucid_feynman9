import * as graphql from "@nestjs/graphql";
import { UserSettingResolverBase } from "./base/userSetting.resolver.base";
import { UserSetting } from "./base/UserSetting";
import { UserSettingService } from "./userSetting.service";

@graphql.Resolver(() => UserSetting)
export class UserSettingResolver extends UserSettingResolverBase {
  constructor(protected readonly service: UserSettingService) {
    super(service);
  }
}

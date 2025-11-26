import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountMembershipService } from "./accountMembership.service";
import { AccountMembershipControllerBase } from "./base/accountMembership.controller.base";

@swagger.ApiTags("accountMemberships")
@common.Controller("accountMemberships")
export class AccountMembershipController extends AccountMembershipControllerBase {
  constructor(protected readonly service: AccountMembershipService) {
    super(service);
  }
}

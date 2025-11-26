import { Module } from "@nestjs/common";
import { AccountMembershipModuleBase } from "./base/accountMembership.module.base";
import { AccountMembershipService } from "./accountMembership.service";
import { AccountMembershipController } from "./accountMembership.controller";
import { AccountMembershipResolver } from "./accountMembership.resolver";

@Module({
  imports: [AccountMembershipModuleBase],
  controllers: [AccountMembershipController],
  providers: [AccountMembershipService, AccountMembershipResolver],
  exports: [AccountMembershipService],
})
export class AccountMembershipModule {}

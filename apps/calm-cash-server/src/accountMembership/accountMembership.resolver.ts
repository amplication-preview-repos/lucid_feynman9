import * as graphql from "@nestjs/graphql";
import { AccountMembershipResolverBase } from "./base/accountMembership.resolver.base";
import { AccountMembership } from "./base/AccountMembership";
import { AccountMembershipService } from "./accountMembership.service";

@graphql.Resolver(() => AccountMembership)
export class AccountMembershipResolver extends AccountMembershipResolverBase {
  constructor(protected readonly service: AccountMembershipService) {
    super(service);
  }
}

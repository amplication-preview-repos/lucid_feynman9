import { AccountMembershipWhereInput } from "./AccountMembershipWhereInput";
import { AccountMembershipOrderByInput } from "./AccountMembershipOrderByInput";

export type AccountMembershipFindManyArgs = {
  where?: AccountMembershipWhereInput;
  orderBy?: Array<AccountMembershipOrderByInput>;
  skip?: number;
  take?: number;
};

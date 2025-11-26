import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountMembershipCreateInput = {
  account: AccountWhereUniqueInput;
  isActive: boolean;
  role: "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";
  user: UserWhereUniqueInput;
};

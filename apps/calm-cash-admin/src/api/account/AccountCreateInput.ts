import { InvitationCreateNestedManyWithoutAccountsInput } from "./InvitationCreateNestedManyWithoutAccountsInput";
import { AccountMembershipCreateNestedManyWithoutAccountsInput } from "./AccountMembershipCreateNestedManyWithoutAccountsInput";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  balanceCents?: number | null;
  currency: string;
  deletedAt?: Date | null;
  invitations?: InvitationCreateNestedManyWithoutAccountsInput;
  isCompany: boolean;
  memberships?: AccountMembershipCreateNestedManyWithoutAccountsInput;
  name: string;
  note?: string | null;
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
};

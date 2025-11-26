import { InvitationUpdateManyWithoutAccountsInput } from "./InvitationUpdateManyWithoutAccountsInput";
import { AccountMembershipUpdateManyWithoutAccountsInput } from "./AccountMembershipUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  balanceCents?: number | null;
  currency?: string;
  deletedAt?: Date | null;
  invitations?: InvitationUpdateManyWithoutAccountsInput;
  isCompany?: boolean;
  memberships?: AccountMembershipUpdateManyWithoutAccountsInput;
  name?: string;
  note?: string | null;
  transactions?: TransactionUpdateManyWithoutAccountsInput;
};

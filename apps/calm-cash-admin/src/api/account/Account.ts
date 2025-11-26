import { Invitation } from "../invitation/Invitation";
import { AccountMembership } from "../accountMembership/AccountMembership";
import { Transaction } from "../transaction/Transaction";

export type Account = {
  balanceCents: number | null;
  createdAt: Date;
  currency: string;
  deletedAt: Date | null;
  id: string;
  invitations?: Array<Invitation>;
  isCompany: boolean;
  memberships?: Array<AccountMembership>;
  name: string;
  note: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};

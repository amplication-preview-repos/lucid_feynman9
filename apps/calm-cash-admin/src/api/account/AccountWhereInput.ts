import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { InvitationListRelationFilter } from "../invitation/InvitationListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { AccountMembershipListRelationFilter } from "../accountMembership/AccountMembershipListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type AccountWhereInput = {
  balanceCents?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  currency?: StringFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  invitations?: InvitationListRelationFilter;
  isCompany?: BooleanFilter;
  memberships?: AccountMembershipListRelationFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  updatedAt?: DateTimeFilter;
};

import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationWhereInput = {
  account?: AccountWhereUniqueInput;
  createdAt?: DateTimeFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  invitee?: UserWhereUniqueInput;
  inviteeEmail?: StringFilter;
  inviter?: UserWhereUniqueInput;
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | "EXPIRED";
  token?: StringFilter;
};

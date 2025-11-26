import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvitationUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  expiresAt?: Date | null;
  invitee?: UserWhereUniqueInput | null;
  inviteeEmail?: string;
  inviter?: UserWhereUniqueInput;
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | "EXPIRED";
  token?: string;
};

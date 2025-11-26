import { Account } from "../account/Account";
import { User } from "../user/User";

export type Invitation = {
  account?: Account | null;
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  invitee?: User | null;
  inviteeEmail: string;
  inviter?: User;
  status?: "PENDING" | "ACCEPTED" | "REVOKED" | "EXPIRED";
  token: string;
};

import { Account } from "../account/Account";
import { User } from "../user/User";

export type AccountMembership = {
  account?: Account;
  id: string;
  isActive: boolean;
  joinedAt: Date;
  role?: "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";
  user?: User;
};

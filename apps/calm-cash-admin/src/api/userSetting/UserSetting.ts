import { User } from "../user/User";

export type UserSetting = {
  createdAt: Date;
  defaultAccountId: string | null;
  enableBiometrics: boolean;
  id: string;
  language: string;
  timeZone: string | null;
  updatedAt: Date;
  user?: User;
};

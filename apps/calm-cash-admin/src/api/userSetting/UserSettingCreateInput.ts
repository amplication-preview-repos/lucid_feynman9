import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSettingCreateInput = {
  defaultAccountId?: string | null;
  enableBiometrics: boolean;
  language: string;
  timeZone?: string | null;
  user: UserWhereUniqueInput;
};

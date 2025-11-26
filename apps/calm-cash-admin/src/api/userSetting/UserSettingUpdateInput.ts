import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSettingUpdateInput = {
  defaultAccountId?: string | null;
  enableBiometrics?: boolean;
  language?: string;
  timeZone?: string | null;
  user?: UserWhereUniqueInput;
};

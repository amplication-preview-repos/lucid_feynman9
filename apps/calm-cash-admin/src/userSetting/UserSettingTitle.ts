import { UserSetting as TUserSetting } from "../api/userSetting/UserSetting";

export const USERSETTING_TITLE_FIELD = "defaultAccountId";

export const UserSettingTitle = (record: TUserSetting): string => {
  return record.defaultAccountId?.toString() || String(record.id);
};

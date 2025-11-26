import { UserSettingWhereInput } from "./UserSettingWhereInput";
import { UserSettingOrderByInput } from "./UserSettingOrderByInput";

export type UserSettingFindManyArgs = {
  where?: UserSettingWhereInput;
  orderBy?: Array<UserSettingOrderByInput>;
  skip?: number;
  take?: number;
};

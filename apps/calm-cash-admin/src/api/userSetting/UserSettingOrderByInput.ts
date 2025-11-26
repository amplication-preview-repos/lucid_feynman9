import { SortOrder } from "../../util/SortOrder";

export type UserSettingOrderByInput = {
  createdAt?: SortOrder;
  defaultAccountId?: SortOrder;
  enableBiometrics?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  timeZone?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

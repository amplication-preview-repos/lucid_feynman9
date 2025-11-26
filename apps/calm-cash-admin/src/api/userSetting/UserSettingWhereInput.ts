import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSettingWhereInput = {
  createdAt?: DateTimeFilter;
  defaultAccountId?: StringNullableFilter;
  enableBiometrics?: BooleanFilter;
  id?: StringFilter;
  language?: StringFilter;
  timeZone?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};

import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountMembershipWhereInput = {
  account?: AccountWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  joinedAt?: DateTimeFilter;
  role?: "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";
  user?: UserWhereUniqueInput;
};

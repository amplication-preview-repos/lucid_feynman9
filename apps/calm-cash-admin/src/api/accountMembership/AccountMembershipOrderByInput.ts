import { SortOrder } from "../../util/SortOrder";

export type AccountMembershipOrderByInput = {
  accountId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  joinedAt?: SortOrder;
  role?: SortOrder;
  userId?: SortOrder;
};

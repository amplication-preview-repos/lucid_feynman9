import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  isIncome?: SortOrder;
  name?: SortOrder;
  parentId?: SortOrder;
  updatedAt?: SortOrder;
};

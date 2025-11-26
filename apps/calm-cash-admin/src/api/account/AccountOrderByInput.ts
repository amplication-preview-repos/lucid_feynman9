import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  balanceCents?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  isCompany?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};

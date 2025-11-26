import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  accountId?: SortOrder;
  aiExtractionId?: SortOrder;
  amount?: SortOrder;
  categoryId?: SortOrder;
  counterpartyName?: SortOrder;
  counterpartyUserId?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateOccurred?: SortOrder;
  deletedAt?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  externalRef?: SortOrder;
  id?: SortOrder;
  isRecurring?: SortOrder;
  meta?: SortOrder;
  paidAt?: SortOrder;
  recordedById?: SortOrder;
  recurrenceRule?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};

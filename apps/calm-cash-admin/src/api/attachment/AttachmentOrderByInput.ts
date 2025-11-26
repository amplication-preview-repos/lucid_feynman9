import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  kind?: SortOrder;
  mimeType?: SortOrder;
  sizeBytes?: SortOrder;
  transactionId?: SortOrder;
  transcript?: SortOrder;
  uploadedById?: SortOrder;
  url?: SortOrder;
};

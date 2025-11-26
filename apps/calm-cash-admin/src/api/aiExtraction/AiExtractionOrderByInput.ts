import { SortOrder } from "../../util/SortOrder";

export type AiExtractionOrderByInput = {
  actorReviewed?: SortOrder;
  amount?: SortOrder;
  confidenceScore?: SortOrder;
  currency?: SortOrder;
  description?: SortOrder;
  extractedAt?: SortOrder;
  extractedById?: SortOrder;
  id?: SortOrder;
  inferredCategoryId?: SortOrder;
  inferredType?: SortOrder;
  meta?: SortOrder;
  rawPayload?: SortOrder;
  reviewerId?: SortOrder;
  shopName?: SortOrder;
  transactionId?: SortOrder;
};

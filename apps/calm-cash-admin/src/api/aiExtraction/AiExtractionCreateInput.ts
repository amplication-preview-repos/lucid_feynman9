import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type AiExtractionCreateInput = {
  actorReviewed: boolean;
  amount?: Decimal | null;
  confidenceScore?: number | null;
  currency?: string | null;
  description?: string | null;
  extractedBy?: UserWhereUniqueInput | null;
  inferredCategory?: CategoryWhereUniqueInput | null;
  inferredType?:
    | "EXPENSE"
    | "INCOME"
    | "ACCOUNT_RECEIVABLE"
    | "ACCOUNT_PAYABLE"
    | null;
  meta?: InputJsonValue;
  rawPayload: InputJsonValue;
  reviewerId?: string | null;
  shopName?: string | null;
  transaction: TransactionWhereUniqueInput;
};

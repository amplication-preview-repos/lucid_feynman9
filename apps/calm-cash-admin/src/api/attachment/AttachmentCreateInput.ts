import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttachmentCreateInput = {
  kind: string;
  mimeType: string;
  sizeBytes?: number | null;
  transaction?: TransactionWhereUniqueInput | null;
  transcript?: string | null;
  uploadedBy: UserWhereUniqueInput;
  url: string;
};

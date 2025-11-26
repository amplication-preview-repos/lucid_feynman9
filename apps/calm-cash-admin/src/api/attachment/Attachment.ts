import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Attachment = {
  createdAt: Date;
  id: string;
  kind: string;
  mimeType: string;
  sizeBytes: number | null;
  transaction?: Transaction | null;
  transcript: string | null;
  uploadedBy?: User;
  url: string;
};

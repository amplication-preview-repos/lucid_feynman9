import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "kind";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.kind?.toString() || String(record.id);
};

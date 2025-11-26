import { AiExtraction as TAiExtraction } from "../api/aiExtraction/AiExtraction";

export const AIEXTRACTION_TITLE_FIELD = "shopName";

export const AiExtractionTitle = (record: TAiExtraction): string => {
  return record.shopName?.toString() || String(record.id);
};

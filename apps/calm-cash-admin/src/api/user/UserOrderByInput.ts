import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  avatarUrl?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  email?: SortOrder;
  emailVerified?: SortOrder;
  fingerprintEnabled?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  passwordHash?: SortOrder;
  phone?: SortOrder;
  postcode?: SortOrder;
  provider?: SortOrder;
  providerId?: SortOrder;
  providerToken?: SortOrder;
  settingsId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};

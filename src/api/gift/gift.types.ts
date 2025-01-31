export type CreateGiftArgs = {
  fullName: string;
  phone: string;
  balance: string;
};

export type CreateGiftResponse = {
  balance: number;
  expiredAt: string | null;
  fullName: string | null;
  phone: string;
  publicId: string;
};

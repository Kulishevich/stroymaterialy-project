export type UserSettingResponse = {
  discountDetails: DiscountDetails;
  email: string;
  firstName: string;
  fullName: string;
  isPartner: boolean;
  lastName: string;
  phone: string;
};

export type DiscountDetails = {
  discountPercent: number;
  isFreeDelivery: boolean;
  isFreeWorkerService: boolean;
  level: number;
};

export type ChangeSettingParams = {
  name: string;
  email: string;
  phone: string;
};

export type ChangePasswordParams = {
  password: string;
  newPassword: string;
  newPasswordConfirmation: string;
};

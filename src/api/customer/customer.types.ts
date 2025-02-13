export type CustomerArgs = {
  orderId: string;
  email: string;
  phone: string;
  type: string;
  referralCode?: string;
  tin?: string;
  fullName: string;
};

export type CustomerResponse = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

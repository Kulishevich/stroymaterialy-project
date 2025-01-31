export type CustomerArgs = {
  orderId: string;
  email: string;
  phone: string;
  type: string;
  tin: string;
  referralCode: string;
};

export type CustomerResponse = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
};

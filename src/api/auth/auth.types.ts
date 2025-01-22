export type LoginArgs = {
  email: string;
  password: string;
};

export type LoginResponce = {
  data: {
    token: string;
  };
  errors: boolean;
  message: string;
};

export type SignUpArgs = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
};

export type SignUpResponce = {
  errors: boolean;
  message: string;
  data: {
    token: string;
    errors: {
      fullName: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      isPartner: boolean;
    };
  };
};

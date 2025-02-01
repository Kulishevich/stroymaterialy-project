export type GetPartnerResponse = {
  data: {
    isPartner: boolean;
    profession: string;
    sphere: string;
    about: string;
    tin: string;
    company: string;
    certificate: string;
  };
};

export type CreatePartnerArgs = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
  profession: string;
  sphere: string;
  about: string;
  tin: string;
  company: string;
};

export type CreatePartnerResponse = {
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

export type CreatePartnerExistUserArgs = {
  profession: string;
  sphere: string;
  about: string;
  tin: string;
  company: string;
};

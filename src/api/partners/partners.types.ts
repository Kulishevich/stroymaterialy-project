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

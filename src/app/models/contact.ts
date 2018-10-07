export interface Contact extends ContactForm {
  uuid: string;
}

export interface ContactForm {
  companyName: string;
  nip: number;
  regon: number;
  address: Address;
  email: string;
  phoneNumber: number;
}

export interface Address {
  street: string;
  streetNumber: string;
  postalCode: string;
  city: string;
}


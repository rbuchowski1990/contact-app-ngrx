export interface Contact extends ContactFormData {
  uuid: string;
}

export interface ContactFormData {
  companyName: string;
  nip: number;
  regon: number;
}

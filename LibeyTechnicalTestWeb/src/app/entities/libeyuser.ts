export interface LibeyUser {
  documentNumber: string;
  documentTypeId: number | null;
  name: string;
  fathersLastName: string;
  mothersLastName: string;
  address: string;
  regionCode: string | null;
  provinceCode: string | null;
  ubigeoCode: string | null;
  phone: string;
  email: string;
  password: string;
  active: boolean;
}

export interface DocumentType {
  id: number;
  description: string;
}

export interface Region {
  regionCode: string;
  description: string;
}
export interface Province {
  provinceCode: string;
  regionCode: string;
  description: string;
}

export interface Ubigeo {
  ubigeoCode: string;
  provinceCode: string;
  regionCode: string;
  description: string;
}

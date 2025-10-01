export type Specialty = {
  id: number;
  name: string;
};

export type Professional = {
  id: number;
  name: string | null;
  email: string;
  officeAddress: string | null;
  city: string | null;
  specialties: Specialty[];
};

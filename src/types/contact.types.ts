export type Contact = {
  id: string;
  name: string;
  phoneNr: string;
  email: string;
  createdAt: string;
};

export type ContactInfo = Omit<Contact, "id" | "createdAt">;

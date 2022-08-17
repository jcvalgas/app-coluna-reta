import { Institute, User } from "@prisma/client";

export class Student {
  id?: string;
  name: string;
  birthDate: string;
  phoneStudent: string;
  photo: string;
  description: string;
  user?: User;
  institute?: Institute;

  createdAt?: Date;
  updatedAt?: Date;
}

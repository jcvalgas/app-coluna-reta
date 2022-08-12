import { Institute, User } from "@prisma/client";

export class Student {
  id?: string;
  name: string;
  birthDate: string;
  phoneStudent: string;
  photo: string;
  description: string;
  userId: string;
  instituteId: string;

  createdAt?: Date;
  updatedAt?: Date;
}

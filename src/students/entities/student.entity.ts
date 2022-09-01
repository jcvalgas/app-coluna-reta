import { Institute } from "src/institutes/entities/institute.entity";
import { User } from "src/users/entities/user.entity";

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

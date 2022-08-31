import { Institute } from 'src/institutes/entities/institute.entity';

export class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  institutes?: Institute;

  createdAt?: Date;
  updatedAt?: Date;
}

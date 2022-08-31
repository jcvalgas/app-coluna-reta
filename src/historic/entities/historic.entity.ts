import { Student } from "src/students/entities/student.entity";

export class Historic {
  id?: string;
  date: string;
  photo: string[];
  forwarding: string;
  angleCobb: string;
  returnDate: string;
  note: string;
  student?: Student;

  createdAt?: Date;
  updatedAt?: Date;
}

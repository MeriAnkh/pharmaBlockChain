import { alergie } from "./alergie.model";

export class patient {

   imgProfileUrl!: string;
   firstName!: string;
   lastName!: string;
   birthDate!: Date;
   nationality!: string;
   password! : string
   adress! : string
   sexe!: string
   email!: string;
   telephone!: number;
   genre!: string;
   alergies!: alergie[];
   
}
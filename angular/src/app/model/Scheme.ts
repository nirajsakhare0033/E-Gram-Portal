import { Village } from "./Village";

export class Scheme{
  id:number;
  schemeStartDate:string;
  expDate:Date;
  schemeDes:string;
  village:Village[]=[];
}
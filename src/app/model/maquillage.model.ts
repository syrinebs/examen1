import { Brand } from "./brand.model";

export class Maquillage {
    idMaquillage! : number;
    nomMaquillage! : string;
    prixMaquillage! : number;
    dateCreation! : Date ;
    brand!: Brand;
    }
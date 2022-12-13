import { Injectable } from '@angular/core';
import { Brand } from '../model/brand.model';
import { Maquillage } from '../model/maquillage.model';



@Injectable({
  providedIn: 'root'
})
export class MaquillageService {
  maquillages : Maquillage[];
  brands : Brand[];
 


  constructor() { 

this.brands = [
  {idbrand : 1, nombrand : "forever"},
{idbrand : 2, nombrand : "lella"}
];
    this.maquillages = [
      {idMaquillage : 1, nomMaquillage : "Rouge à lèvres", prixMaquillage : 3000.600, dateCreation : new Date("01/14/2011"),
       brand :{idbrand : 1, nombrand : "forever"}},
      {idMaquillage : 2, nomMaquillage : "Fard à joues", prixMaquillage : 450, dateCreation : new Date("12/17/2010"),
       brand : {idbrand : 2, nombrand : "lella"}},
      {idMaquillage : 3, nomMaquillage :"Anti cernes", prixMaquillage : 900.123, dateCreation : new Date("02/20/2020"),
      brand : {idbrand : 1, nombrand : "forever"}}
    ];
  }
  listeMaquillage():Maquillage[]{
    return this.maquillages;

  }

  ajouterMaquillage(maq : Maquillage){
    this.maquillages.push(maq);
  }

  supprimerMaquillage( maq: Maquillage){
    //supprimer le maquillage maq du tableau maquillage
    const index = this.maquillages.indexOf(maq, 0);
    if (index > -1) {
    this.maquillages.splice(index, 1);
    }
    //ou Bien
    /* this.maquillage.forEach((cur, index) => {
    if(maq.idMaquillage === cur.idMaquillage) {
    this.maquillage.splice(index, 1);
    }
    }); */
  }

    consulterMaquillage(id:number): Maquillage{
      return  this.maquillages.find(m => m.idMaquillage == id)!;
      
    }


    updateMaquillage(m:Maquillage)
{
// console.log(p);
this.supprimerMaquillage(m);
this.ajouterMaquillage(m);
}

listeBrand():Brand[] {
  return this.brands;
  }
  consulterBrand(id:number): Brand{
  return this.brands.find(br => br.idbrand == id)!;

}

  
      
    
  
    
}

 

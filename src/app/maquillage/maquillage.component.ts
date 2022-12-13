import { Component, OnInit } from '@angular/core';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../services/maquillage.service';

@Component({
  selector: 'app-maquillage',
  templateUrl: './maquillage.component.html',
  
})
export class MaquillageComponent  implements OnInit{

  maquillage? : Maquillage[];
  
  constructor(private maquillageService : MaquillageService){
  }

  ngOnInit(): void {
    this.maquillage = this.maquillageService.listeMaquillage();
      
  }

 supprimerMaquillage(maq : Maquillage){
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
      this.maquillageService.supprimerMaquillage(maq);
 }

}
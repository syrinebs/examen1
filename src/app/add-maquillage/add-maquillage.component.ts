import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../model/brand.model';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../services/maquillage.service';

@Component({
  selector: 'app-add-maquillage',
  templateUrl: './add-maquillage.component.html',
})
export class AddMaquillageComponent implements OnInit {

  newMaquillage =  new Maquillage();
  brands! : Brand[];
  newIdBrand! : number;
  newBrand!:Brand;

  constructor(private maquillageService : MaquillageService,
              private router : Router){ }

  ngOnInit(): void {
    this.brands = this.maquillageService.listeBrand();
    
  } 

  addMaquillage(){
    console.log(this.newIdBrand);
    this.newBrand = this.maquillageService.consulterBrand(this.newIdBrand);
    this.newMaquillage.brand = this.newBrand;
    this.maquillageService.ajouterMaquillage(this.newMaquillage);
  }
}

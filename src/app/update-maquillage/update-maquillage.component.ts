import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../model/brand.model';
import { Maquillage } from '../model/maquillage.model';
import { MaquillageService } from '../services/maquillage.service';

@Component({
  selector: 'app-update-maquillage',
  templateUrl: './update-maquillage.component.html',
  styles: [
  ]
})
export class UpdateMaquillageComponent implements OnInit {

  currentMaquillage = new Maquillage();
  brands! : Brand[];
updatedBrandId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
              private maquillageService: MaquillageService){}

   ngOnInit(): void {
     //console.log(this.activatedRoute.snapshot.params['id']);
     this.brands = this.maquillageService.listeBrand();
     this.currentMaquillage = this.maquillageService.consulterMaquillage(this.activatedRoute.snapshot.params['id']);
     this.updatedBrandId=this.currentMaquillage.brand.idbrand;

   }  

   updateMaquillage(){
    this.currentMaquillage.brand=this.maquillageService.consulterBrand(this.updatedBrandId);
    this.maquillageService.updateMaquillage(this.currentMaquillage);
    this.router.navigate(['maquillage']);
   }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaquillageComponent } from './add-maquillage/add-maquillage.component';
import { MaquillageComponent } from './maquillage/maquillage.component';
import { UpdateMaquillageComponent } from './update-maquillage/update-maquillage.component';

const routes: Routes = [
  {path : "maquillage", component : MaquillageComponent},
  {path : "add-maquillage", component : AddMaquillageComponent},
  {path: "updateMaquillage/:id", component: UpdateMaquillageComponent},
  {path: "", redirectTo: "maquillage", pathMatch: "full" }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

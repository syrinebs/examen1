import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaquillageComponent } from './maquillage/maquillage.component';
import { AddMaquillageComponent } from './add-maquillage/add-maquillage.component';
import { UpdateMaquillageComponent } from './update-maquillage/update-maquillage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MaquillageComponent,
    AddMaquillageComponent,
    UpdateMaquillageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

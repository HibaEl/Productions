import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionsComponent } from './productions/productions.component';
import { ProductionCreateComponent } from './productions/production-create/production-create.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductionsListComponent } from './productions/productions-list/productions-list.component';
import {RechercheProduction} from './controller/model/recherche-production.model';
import { ProductionComparaisonComponent } from './productions/production-comparaison/production-comparaison.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionsComponent,
    ProductionCreateComponent,
    ProductionsListComponent,
    ProductionComparaisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import {Production} from '../model/production.model';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {RechercheProduction} from '../model/recherche-production.model';
import {Evolution} from '../model/evolution.model';


@Injectable({
  providedIn: 'root'
})
export class ProductionService {
private myurl = 'http://localhost:8095/production/productions/';
private myurl1 = 'http://localhost:8095/production/productions/recherche';
  private myurl2 = 'http://localhost:8095/production/productions/all';
  private myurl3 = 'http://localhost:8092/Import/evolutions/reference/';


private myproductions: Array<Production>;
  private myproductions1: Array<Production>;
  private myselectedProd: Production;
  private myselectedProd1: Production;
private imoyPoid: number;
private imoyNbrO: number;


public productionCreate: Production = new Production('', 0, 0, 0, 0, 0, '', '', '');
public productionsList: RechercheProduction = new RechercheProduction('', 0 ,  0);
public productionComparaison: Evolution = new Evolution('', 0, 0, 0);
constructor(private http: HttpClient) {}

 public saveProduction() {
   this.http.post<Production>(this.myurl, this.productionCreate).subscribe(data => {
     console.log('ok');
     this.productionCreate = new Production('', 0, 0, 0, 0, 0, '', '', '');
   }

   );

 }

 public findAll() {
  this.http.get<Array<Production>>(this.myurl2).subscribe(
    data3 => {
      this.productions1 = data3 ;
    },
    error3 => {
      console.log('error while loading list...');
    }
  );
 }
 public findevolutionByProduction(prod) {
this.myselectedProd = prod;
if (this.myselectedProd != null) {
  this.http.get  <Evolution>(this.myurl3 + this.myselectedProd.refEvolution).subscribe(
    data4 => {
      this.productionComparaison = data4;
      console.log('ok');
    },
    error5 => {
      console.log('sorry');
    }
  );
}}
 public deleteProduction(prod) {
     this.myselectedProd1 = prod;
     if (this.myselectedProd1 != null) {
       this.http.delete(this.myurl + 'reference/' + this.myselectedProd1.reference).subscribe(
         data => {
           console.log('supprimer avec succés');
         },
         error5 => {
           console.log('Error while deleting');
         }
       );
     }
 }
public findByRefFirmeAndSemaineProductionAndAnneeProduction() {
  this.http.post<Array<Production>>(this.myurl1, this.productionsList).subscribe(
    data => {
    this.productions = data;
    console.log('ok');
    },

     error1 => {
      console.log('error while loading list...');
    }
  );
  this.http.get<number>(this.myurl + 'semaineProduction/' + this.productionsList.semaine + '/refFirme/' + this.productionsList.refFirme + '/anneeProduction/' + this.productionsList.annee).subscribe(
    data1 => {
      this.moyPoid = data1 ;
      console.log('le moyen du nbr Poids calculé');
    },
    error2 => {
      console.log('error........');
    }
  );
  this.http.get<number>(this.myurl + 'anneeO/' + this.productionsList.annee + '/refFirmeO/' + this.productionsList.refFirme + '/semaineO/' + this.productionsList.semaine).subscribe(
    data1 => {
      this.moyNbrO = data1 ;
      console.log('le moyen du nbr Oeuf calculé');
    },
    error2 => {
      console.log('error........');
    }
  );
}

  get url(): string {
    return this.myurl;
  }

  set url(value: string) {
    this.myurl = value;
  }

  get productions(): Array<Production> {
  return this.myproductions;
  }

  set productions(value: Array<Production>) {
    this.myproductions = value;
  }
  get url1(): string {
    return this.myurl1;
  }

  set url1(value: string) {
    this.myurl1 = value;
  }

  get moyPoid(): number {
    return this.imoyPoid;
  }

  set moyPoid(value: number) {
    this.imoyPoid = value;
  }

  get moyNbrO(): number {
    return this.imoyNbrO;
  }

  set moyNbrO(value: number) {
    this.imoyNbrO = value;
  }

  get url2(): string {
    return this.myurl2;
  }

  set url2(value: string) {
    this.myurl2 = value;
  }

  get productions1(): Array<Production> {
    return this.myproductions1;
  }

  set productions1(value: Array<Production>) {
    this.myproductions1 = value;
  }
  get selectedProd(): Production {
    return this.myselectedProd;
  }

  set selectedProd(value: Production) {
    this.myselectedProd = value;
  }

  get url3(): string {
    return this.myurl3;
  }

  set url3(value: string) {
    this.myurl3 = value;
  }


  get selectedProd1(): Production {
    return this.myselectedProd1;
  }

  set selectedProd1(value: Production) {
    this.myselectedProd1 = value;
  }
}

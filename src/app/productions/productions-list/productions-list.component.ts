import { Component, OnInit } from '@angular/core';
import {ProductionService} from '../../controller/service/production.service';

@Component({
  selector: 'app-productions-list',
  templateUrl: './productions-list.component.html',
  styleUrls: ['./productions-list.component.css']
})
export class ProductionsListComponent implements OnInit {

  constructor(private productionService: ProductionService) { }

  ngOnInit() {
  }
  public get productions() {
    return this.productionService.productions;
  }
  public get moyPoid() {
    return this.productionService.moyPoid;
  }
  public get moyNbrO() {
    return this.productionService.moyNbrO;
  }
  public get rechercheProduction() {
    return this.productionService.productionsList;
  }
  public findByRefFirmeAndSemaineProductionAndAnneeProduction() {
    return this.productionService.findByRefFirmeAndSemaineProductionAndAnneeProduction();
  }

}

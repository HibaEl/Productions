import { Component, OnInit } from '@angular/core';
import {ProductionService} from '../../controller/service/production.service';

@Component({
  selector: 'app-production-create',
  templateUrl: './production-create.component.html',
  styleUrls: ['./production-create.component.css']
})
export class ProductionCreateComponent implements OnInit {

  constructor(private productionService: ProductionService) { }

  ngOnInit() {
  }
public get production() {
return this.productionService.productionCreate;

}
public saveProduction() {
    this.productionService.saveProduction();
}
}

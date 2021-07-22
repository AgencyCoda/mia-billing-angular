import { Component, OnInit } from '@angular/core';
import { MiaBuyItem } from 'projects/agencycoda/mia-billing/src/lib/entities/mia_buy_item';
import { MiaMethod } from 'projects/agencycoda/mia-billing/src/lib/entities/mia_method';
import { MiaBillingPageConfig } from 'projects/agencycoda/mia-billing/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  config = new MiaBillingPageConfig();

  constructor() {}

  ngOnInit(): void {
    this.loadConfig();
  }
  
  loadConfig() {
    this.config.title = 'Example Billing';
    this.config.hasHeader = true;
    this.config.startStep = 0;

    this.config.buyItem.title = 'Plan Premium';
    this.config.buyItem.caption = 'Aumenta su capacidad de almacenamiento';
    this.config.buyItem.amount = 299;
    this.config.buyItem.type = MiaBuyItem.TYPE_MONTH_WITH_HAS_DISCOUNT_YEAR;
    this.config.buyItem.percentDiscountYear = 20;
    this.config.buyItem.details = [
      'Todos los beneficios',
      '15 cuentas',
      '5 newsrooms',
      '25 Users'
    ];
    this.config.buyItem.discounts = [{ title: 'Credito', discount: 10 }];

    this.config.methods = [
      MiaMethod.PAYPAL_METHOD
    ];
  }
}

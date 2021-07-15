import { Component, OnInit } from '@angular/core';
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

    this.config.buyItem.title = 'Plan Premium';
    this.config.buyItem.caption = 'Aumenta su capacidad de almacenamiento';
    this.config.buyItem.amount = 299;

    this.config.methods = [
      MiaMethod.PAYPAL_METHOD,
      { id: 'other', title: 'Pay with Example', image: '' }
    ];
  }
}

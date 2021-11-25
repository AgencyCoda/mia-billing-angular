import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaBuyItem } from 'projects/agencycoda/mia-billing/src/lib/entities/mia_buy_item';
import { MiaMethod } from 'projects/agencycoda/mia-billing/src/lib/entities/mia_method';
import { MiaBillingPageComponent, MiaBillingPageConfig } from 'projects/agencycoda/mia-billing/src/public-api';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('billingPage') billingPage!: MiaBillingPageComponent;

  config = new MiaBillingPageConfig();

  constructor(
    protected testService: TestService
  ) {}

  ngOnInit(): void {
    this.loadConfig();
  }

  verifyDiscount(code: string) {

    this.testService.verifyDiscount(code, this.config.planId).subscribe(res => {

      this.config.buyItem.externalId = res.paypal_plan_id;
      this.config.buyItem.externalIdYear = res.paypal_plan_id_year;
      this.config.buyItem.discounts = [{ title: 'Discount code', discount_month: res.amount_discount_month, discount_year: res.amount_discount_year }];

      this.billingPage.stopProcessing();
    }, error => {
      this.billingPage.stopProcessing();
    });
  }
  
  loadConfig() {
    this.config.planId = 1;
    this.config.title = 'Example Billing';
    this.config.hasHeader = true;
    this.config.startStep = 1;
    this.config.paypalClientId = 'AaKquvyMZnuKc4QOtnBQI-JXmDDGeLsztBg-73NWDj89PhpZ0gcX85hE5F4iPCPZdfPs2YfdPCZnjI4s';
    this.config.isAllowCodeDiscount = true;

    // Subscription
    this.config.buyItem.externalId = 'P-0WJ449211D884135FMD4Y2QQ';
    this.config.buyItem.externalIdYear = 'P-16A2456718670311NMD5L3PI';
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
    //this.config.buyItem.discounts = [{ title: 'Credito', discount: 10 }];

    this.config.methods = [
      MiaMethod.PAYPAL_METHOD
    ];
  }
}

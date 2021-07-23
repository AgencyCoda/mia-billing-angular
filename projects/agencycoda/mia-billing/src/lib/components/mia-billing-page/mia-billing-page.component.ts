import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MiaBillingPageConfig } from '../../entities/mia_billing_page_config';
import { MiaBuyItem } from '../../entities/mia_buy_item';
import { MiaMethod } from '../../entities/mia_method';

@Component({
  selector: 'mia-billing-page',
  templateUrl: './mia-billing-page.component.html',
  styleUrls: ['./mia-billing-page.component.css']
})
export class MiaBillingPageComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();

  currentStep = 0;
  typeMonthWithHasDiscountYear = MiaBuyItem.TYPE_MONTH_WITH_HAS_DISCOUNT_YEAR;

  transaction: any = {};

  constructor() { }

  ngOnInit(): void {
    this.currentStep = this.config.startStep;
  }

  getTotal(): number {
    let total = this.getAmount();
    for (const discount of this.config.buyItem.discounts) {
      total -= discount.discount;
    }
    return total;
  }

  getAmount(): number {
    if(this.config.buyItem.selectedCycle == 1){
      return (this.config.buyItem.amount - (this.config.buyItem.amount * (this.config.buyItem.percentDiscountYear / 100))) * 12;
    }

    return this.config.buyItem.amount;
  }

  onSuccessPayment() {
    this.currentStep = 2;
  }

  onReceivedInfo(info: any) {
    console.log(info);
    this.currentStep = 1;
  }

  onBackChoice() {
    this.currentStep = 0;
  }
}

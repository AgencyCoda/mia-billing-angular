import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MiaBuyItem } from '../../entities/mia_buy_item';
import { MiaMethod } from '../../entities/mia_method';
import { MiaStepsBillingComponent } from '../mia-steps-billing/mia-steps-billing.component';

export class MiaBillingPageConfig {
  title = '';
  logoImage = '';
  hasHeader = true;
  buyItem = new MiaBuyItem();
  startStep = 0;
  methods = new Array<MiaMethod>();
}

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

  onReceivedInfo(info: any) {
    console.log(info);
    this.currentStep = 1;
  }

  onBackChoice() {
    this.currentStep = 0;
  }
}

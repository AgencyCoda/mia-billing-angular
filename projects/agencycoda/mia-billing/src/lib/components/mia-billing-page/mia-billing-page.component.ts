import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @Input() processing = false;
  @Output() applyDiscount = new EventEmitter<string>();

  currentStep = 0;
  typeMonthWithHasDiscountYear = MiaBuyItem.TYPE_MONTH_WITH_HAS_DISCOUNT_YEAR;

  transaction: any = {};

  codeDiscount = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.currentStep = this.config.startStep;
  }

  onApplyCodeDiscount() {
    this.processing = true;
    this.applyDiscount.emit(this.codeDiscount.value);
    this.codeDiscount.setValue('');
  }

  getTotal(): number {
    let total = this.getAmount();
    for (const discount of this.config.buyItem.discounts) {
      if(this.config.buyItem.selectedCycle == 1){
        total -= discount.discount_year;
      } else {
        total -= discount.discount_month;
      }
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

  stopProcessing() {
    this.processing = false;
  }
}

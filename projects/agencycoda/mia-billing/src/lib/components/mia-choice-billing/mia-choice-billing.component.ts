import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaBillingPageConfig } from '../mia-billing-page/mia-billing-page.component';

@Component({
  selector: 'mia-choice-billing',
  templateUrl: './mia-choice-billing.component.html',
  styleUrls: ['./mia-choice-billing.component.css']
})
export class MiaChoiceBillingComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();
  @Output() back = new EventEmitter();

  cycleInput!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  getAmountYear(): number {
    return (this.config.buyItem.amount - (this.config.buyItem.amount * (this.config.buyItem.percentDiscountYear / 100))) * 12;
  }

  onClickBack() {
    this.back.emit();
  }

  loadConfig() {
    this.cycleInput = new FormControl(this.config.buyItem.selectedCycle);
    this.cycleInput.valueChanges.subscribe(type => this.config.buyItem.selectedCycle = type);
  }
}

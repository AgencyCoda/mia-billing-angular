import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaBillingPageConfig } from '../../entities/mia_billing_page_config';

@Component({
  selector: 'mia-choice-billing',
  templateUrl: './mia-choice-billing.component.html',
  styleUrls: ['./mia-choice-billing.component.css']
})
export class MiaChoiceBillingComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();
  @Input() processing = false;
  @Output() back = new EventEmitter();
  @Output() success = new EventEmitter();

  cycleInput!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  getAmountYear(): number {
    return (this.config.buyItem.amount - (this.config.buyItem.amount * (this.config.buyItem.percentDiscountYear / 100))) * 12;
  }

  onApproved() {
    this.success.emit();
  }

  onClickBack() {
    this.back.emit();
  }

  loadConfig() {
    this.cycleInput = new FormControl(this.config.buyItem.selectedCycle);
    this.cycleInput.valueChanges.subscribe(type => {
      this.config.buyItem.selectedCycle = type;
      this.processing = true;

      setTimeout(() => {
        this.processing = false;
      }, 1000);
    });
  }
}

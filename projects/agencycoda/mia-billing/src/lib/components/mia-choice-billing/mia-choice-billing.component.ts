import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiaBillingPageConfig } from '../mia-billing-page/mia-billing-page.component';

@Component({
  selector: 'mia-choice-billing',
  templateUrl: './mia-choice-billing.component.html',
  styleUrls: ['./mia-choice-billing.component.css']
})
export class MiaChoiceBillingComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();
  @Output() back = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickBack() {
    this.back.emit();
  }
}

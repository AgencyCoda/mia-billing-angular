import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mia-info-billing',
  templateUrl: './mia-info-billing.component.html',
  styleUrls: ['./mia-info-billing.component.css']
})
export class MiaInfoBillingComponent implements OnInit {

  @Output() continue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickContinue() {
    this.continue.emit();
  }
}

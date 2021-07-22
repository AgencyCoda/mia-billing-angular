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

  transaction: any = {};

  constructor() { }

  ngOnInit(): void {
    this.currentStep = this.config.startStep;
  }

  onReceivedInfo(info: any) {
    console.log(info);
    this.currentStep = 1;
  }

  onBackChoice() {
    this.currentStep = 0;
  }
}

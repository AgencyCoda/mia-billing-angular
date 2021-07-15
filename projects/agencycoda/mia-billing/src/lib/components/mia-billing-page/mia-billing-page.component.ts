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

  @ViewChild('stepsComp') stepsComp!: MiaStepsBillingComponent;

  @Input() config = new MiaBillingPageConfig();

  currentStep = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentStep = this.config.startStep;
  }

  onNextToStepOne() {
    this.currentStep = 1;
    this.stepsComp.next();
  }
}

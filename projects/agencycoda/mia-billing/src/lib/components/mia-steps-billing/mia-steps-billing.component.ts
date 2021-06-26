import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mia-steps-billing',
  templateUrl: './mia-steps-billing.component.html',
  styleUrls: ['./mia-steps-billing.component.css']
})
export class MiaStepsBillingComponent implements OnInit {

  currentStep = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStep(event: StepperSelectionEvent) {
    console.log(event);
  }
}

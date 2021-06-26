import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'mia-steps-billing',
  templateUrl: './mia-steps-billing.component.html',
  styleUrls: ['./mia-steps-billing.component.css']
})
export class MiaStepsBillingComponent implements OnInit {

  @ViewChild('stepper') stepper!: MatStepper;

  @Input() currentStep = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStep(event: StepperSelectionEvent) {
    console.log(event);
    if(event.selectedIndex > event.previouslySelectedIndex){
      //this.stepper.previous();
    }
  }

  next() {
    this.stepper.next();
  }
}

import { NgModule } from '@angular/core';
import { MiaBillingPageComponent } from './components/mia-billing-page/mia-billing-page.component';
import { MiaHeaderBillingComponent } from './components/mia-header-billing/mia-header-billing.component';
import { MiaStepsBillingComponent } from './components/mia-steps-billing/mia-steps-billing.component';
import { MiaResumeBillingComponent } from './components/mia-resume-billing/mia-resume-billing.component';
import { MiaChoiceBillingComponent } from './components/mia-choice-billing/mia-choice-billing.component';
import { MiaInfoBillingComponent } from './components/mia-info-billing/mia-info-billing.component';
import { MiaSuccessBillingComponent } from './components/mia-success-billing/mia-success-billing.component';
import { MiaProblemBillingComponent } from './components/mia-problem-billing/mia-problem-billing.component';



@NgModule({
  declarations: [
    MiaBillingPageComponent,
    MiaHeaderBillingComponent,
    MiaStepsBillingComponent,
    MiaResumeBillingComponent,
    MiaChoiceBillingComponent,
    MiaInfoBillingComponent,
    MiaSuccessBillingComponent,
    MiaProblemBillingComponent
  ],
  imports: [
  ],
  exports: [
    MiaBillingPageComponent
  ]
})
export class MiaBillingModule { }

// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';

// Mia Library
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';

// Components
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
    // Angular Core
    CommonModule,

    // Mia Library
    MiaCoreModule,
    MiaFormModule,

    // Angular Material
    MatStepperModule,
    MatExpansionModule,
  ],
  exports: [
    MiaBillingPageComponent
  ]
})
export class MiaBillingModule { }

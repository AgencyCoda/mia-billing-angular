// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

// Mia Library
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';

// External Libraries
import { NgxPayPalModule } from '@agencycoda/ngx-paypal';

// Components
import { MiaBillingPageComponent } from './components/mia-billing-page/mia-billing-page.component';
import { MiaHeaderBillingComponent } from './components/mia-header-billing/mia-header-billing.component';
import { MiaStepsBillingComponent } from './components/mia-steps-billing/mia-steps-billing.component';
import { MiaResumeBillingComponent } from './components/mia-resume-billing/mia-resume-billing.component';
import { MiaChoiceBillingComponent } from './components/mia-choice-billing/mia-choice-billing.component';
import { MiaInfoBillingComponent } from './components/mia-info-billing/mia-info-billing.component';
import { MiaSuccessBillingComponent } from './components/mia-success-billing/mia-success-billing.component';
import { MiaProblemBillingComponent } from './components/mia-problem-billing/mia-problem-billing.component';
import { MiaPaypalMethodComponent } from './methods/mia-paypal-method/mia-paypal-method.component';
import { MiaDiscountBillingComponent } from './components/mia-discount-billing/mia-discount-billing.component';

// Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';










@NgModule({
  declarations: [
    MiaBillingPageComponent,
    MiaHeaderBillingComponent,
    MiaStepsBillingComponent,
    MiaResumeBillingComponent,
    MiaChoiceBillingComponent,
    MiaInfoBillingComponent,
    MiaSuccessBillingComponent,
    MiaProblemBillingComponent,
    MiaPaypalMethodComponent,
    MiaDiscountBillingComponent
  ],
  imports: [
    // Angular Core
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // Mia Library
    MiaCoreModule,
    MiaFormModule,
    MatProgressSpinnerModule,

    // Angular Material
    MatStepperModule,
    MatExpansionModule,
    MatDividerModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,

    // External Libraries
    NgxPayPalModule
  ],
  exports: [
    MiaBillingPageComponent,

    // Methods
    MiaPaypalMethodComponent
  ]
})
export class MiaBillingModule { }

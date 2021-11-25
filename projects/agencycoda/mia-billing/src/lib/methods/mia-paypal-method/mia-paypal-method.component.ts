import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest, ICreateSubscriptionCallbackData, ICreateSubscriptionCallbackActions } from '@agencycoda/ngx-paypal';
import { MiaBuyItem } from '../../entities/mia_buy_item';
import { MiaBillingPageConfig } from '../../entities/mia_billing_page_config';

@Component({
  selector: 'mia-paypal-method',
  templateUrl: './mia-paypal-method.component.html',
  styleUrls: ['./mia-paypal-method.component.css']
})
export class MiaPaypalMethodComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();
  @Output() success = new EventEmitter();

  public payPalConfig?: IPayPalConfig;

  messageError = '';

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  getTotal(): number {
    let total = this.getAmount();
    for (const discount of this.config.buyItem.discounts) {
      if(this.config.buyItem.selectedCycle == 1){
        total -= discount.discount_year;
      } else {
        total -= discount.discount_month;
      }
    }

    return Math.round((total + Number.EPSILON) * 100) / 100
  }

  getAmount(): number {
    if(this.config.buyItem.selectedCycle == 1){
      return (this.config.buyItem.amount - (this.config.buyItem.amount * (this.config.buyItem.percentDiscountYear / 100))) * 12;
    }

    return this.config.buyItem.amount;
  }

  loadConfigSubscription() {
    this.payPalConfig = {
      currency: 'USD',
      clientId: this.config.paypalClientId!,
      createSubscription: (data: ICreateSubscriptionCallbackData, actions: ICreateSubscriptionCallbackActions) => {
        let planId = this.config.buyItem.externalId;
        if(this.config.buyItem.type == MiaBuyItem.TYPE_MONTH_WITH_HAS_DISCOUNT_YEAR && this.config.buyItem.selectedCycle == 1){
          planId = this.config.buyItem.externalIdYear;
        }
        return actions.subscription.create({
          'plan_id': planId!
        });
      },
      advanced: {
          commit: 'false',
          extraQueryParams: [
            { name: 'intent', value: 'subscription' }
          ]
      },
      vault: 'true',
      style: {
          label: 'paypal',
          layout: 'vertical'
      },
      onApprove: (data, actions) => {
        //this.loadingPayment = true;
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          //alert('You have successfully created subscription ' + data.subscriptionID);
          this.success.emit();
          /*actions.order.get().then(details => {
              console.log('onApprove - you can get full order details inside onApprove: ', details);
              if(details.status == 'APPROVED'||details.status == 'COMPLETED'){
                //this.paySucces(details);
              }
          });*/

      },
      onCancel: (data, actions) => {
          console.log('OnCancel', data, actions);
          //this.showCancel = true;
          this.messageError = 'Usted ha cancelado el pago.';

      },
      onError: err => {
          console.log('OnError', err);
          //this.showError = true;
          this.messageError = 'Se ha producido un error: ' + err.message;
      },
      onClick: (data, actions) => {
        //this.loadingPayment = true;
        console.log('onClick', data, actions);
        //this.resetStatus();
      }
    };
  }

  loadConfig() {
    if(this.config.buyItem.type == MiaBuyItem.TYPE_MONTH_WITH_HAS_DISCOUNT_YEAR || this.config.buyItem.type == MiaBuyItem.TYPE_MONTH || this.config.buyItem.type == MiaBuyItem.TYPE_YEAR){
      this.loadConfigSubscription();
    }

    // Create Order on Client
      /*createOrderOnClient: (data: any) => {
        return {
          intent: 'CAPTURE',
          payer: {
            name: {
              given_name: 'this.currentUser.firstname',
              surname: 'this.currentUser.lastname'
            },
            //email_address: this.currentUser.email,
            email_address: 'test@coda.com',
          },
          purchase_units: [
            {
              //invoice_id: this.currentInvoice.id + '',
              invoice_id: '2',
              amount: {
                  currency_code: 'USD',
                  value: this.getTotal() + '',
                  breakdown: {
                      item_total: {
                          currency_code: 'USD',
                          value: this.getTotal() + ''
                      }
                  }
              },
              items: [
                {
                  name: this.config.buyItem.title,
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                      currency_code: 'USD',
                      value: this.getTotal() + ''
                  },
                }
              ]
          }
          ]
        };
      },*/
      // Create Order on Server
      /*createOrderOnServer: (data) => {
        return new Promise((resolve, reject) => {
          resolve('7CK33507MW0522435');
        });
      },*/
  }
}

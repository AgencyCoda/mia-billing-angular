import { Component, Input, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest, ICreateSubscriptionCallbackData, ICreateSubscriptionCallbackActions } from '@agencycoda/ngx-paypal';
import { MiaBillingPageConfig } from '../../components/mia-billing-page/mia-billing-page.component';

@Component({
  selector: 'mia-paypal-method',
  templateUrl: './mia-paypal-method.component.html',
  styleUrls: ['./mia-paypal-method.component.css']
})
export class MiaPaypalMethodComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();

  public payPalConfig?: IPayPalConfig;

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  getTotal(): number {
    let total = this.getAmount();
    for (const discount of this.config.buyItem.discounts) {
      total -= discount.discount;
    }

    return Math.round((total + Number.EPSILON) * 100) / 100
  }

  getAmount(): number {
    if(this.config.buyItem.selectedCycle == 1){
      return (this.config.buyItem.amount - (this.config.buyItem.amount * (this.config.buyItem.percentDiscountYear / 100))) * 12;
    }

    return this.config.buyItem.amount;
  }

  loadConfig() {
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'AaKquvyMZnuKc4QOtnBQI-JXmDDGeLsztBg-73NWDj89PhpZ0gcX85hE5F4iPCPZdfPs2YfdPCZnjI4s',
        createSubscription: (data: ICreateSubscriptionCallbackData, actions: ICreateSubscriptionCallbackActions) => {
          return actions.subscription.create({
            'plan_id': 'P-0WJ449211D884135FMD4Y2QQ'
          });
        },
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
        advanced: {
            commit: 'false',
            extraQueryParams: [
              { name: 'intent', value: 'subscription' }
            ]
        },
        vault: 'true',
        style: {
            label: 'paypal',
            layout: 'horizontal'
        },
        onApprove: (data, actions) => {
          //this.loadingPayment = true;
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            /*actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
                if(details.status == 'APPROVED'||details.status == 'COMPLETED'){
                  //this.paySucces(details);
                }
            });*/

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            //this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            //this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            //this.showError = true;
        },
        onClick: (data, actions) => {
          //this.loadingPayment = true;
          console.log('onClick', data, actions);
          //this.resetStatus();
        }
    };
  }
}

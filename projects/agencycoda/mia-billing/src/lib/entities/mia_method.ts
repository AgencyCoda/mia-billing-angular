export class MiaMethod {

    static PAYPAL_METHOD: MiaMethod = { id: 'paypal', title: 'Pay with PayPal', image: '/assets/paypal.png' };

    id = '';
    title = '';
    image? = '';
    component?: any;
}

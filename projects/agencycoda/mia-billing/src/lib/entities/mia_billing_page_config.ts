import { MiaBuyItem } from "./mia_buy_item";
import { MiaMethod } from "./mia_method";

export class MiaBillingPageConfig {
    title = '';
    logoImage = '';
    hasHeader = true;
    buyItem = new MiaBuyItem();
    startStep = 0;
    methods = new Array<MiaMethod>();
    planId = 0;
    paypalClientId?: string;
    isAllowCodeDiscount?: boolean = false;
  }
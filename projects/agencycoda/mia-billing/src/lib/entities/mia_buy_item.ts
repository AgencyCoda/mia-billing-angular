export class MiaBuyItem {
    static TYPE_ONLY = 0; // Only price one shoot
    static TYPE_MONTH = 1; // Subscription each month
    static TYPE_YEAR = 2; // Subscription each year
    static TYPE_MONTH_WITH_HAS_DISCOUNT_YEAR = 3; // Subscription each month with discount if choice yearly

    id = 0;
    title = '';
    caption = '';
    amount = 0;
    type = 0;
    percentDiscountYear = 0;
    details: Array<string> = [];
    discounts: Array<MiaBuyDiscount> = [];
    selectedCycle = 0;
}

export class MiaBuyDiscount {
    title = '';
    discount = 0;
}
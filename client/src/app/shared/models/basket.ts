import * as cuid from "cuid";

    export interface BasketItem {
        id: number;
        productName: string;
        price: number;
        quantity: number;
        pictureUrl: string;
        brand: string;
        type: string;
    }

    export interface Basket {
        id: string;
        items: BasketItem[];
        //Stripe Payment
        clientSecret?: string;
        paymentIntentId?: string;
        deliveryMethodId?: number;
        shippingPrice: number;
    }


    export class Basket implements Basket {
        id = cuid();
        items: BasketItem[] = [];
        //Always have something for Shipping Price, eventhough is zero
        shippingPrice = 0;
    }

    export interface BasketTotals {
        shipping: number;
        subtotal: number;
        total: number;
    }
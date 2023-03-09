import { BasketItem } from 'src/app/shared/models/basket';
import { BasketService } from 'src/app/basket/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
//export class BasketComponent implements OnInit {

  //constructor() { }

  //ngOnInit(): void {
  //}

//}
export class BasketComponent {
  constructor(public basketService: BasketService) {}

  incrementQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item);
  }

  removeItem(event: {id: number, quantity: number}) {
    this.basketService.removeItemFromBasket(event.id, event.quantity);
  }
}
import { BasketService } from 'src/app/basket/basket.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BasketItem } from '../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent {
  @Output() addItem = new EventEmitter<BasketItem>();
  @Output() removeItem = new EventEmitter<{id: number, quantity: number}>();
  //Check or use this input of prop to see if it's a basket
  @Input() isBasket = true;
  
  constructor(public basketService: BasketService) {}

  addBasketItem(item: BasketItem) {
    this.addItem.emit(item);
  }

  removeBasketItem(id: number, quantity = 1) {
    this.removeItem.emit({id, quantity});
  }
  
}

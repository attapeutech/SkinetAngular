import { AccountService } from 'src/app/account/account.service';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Type the word "implements OnInit, and mouse over the AppComponent then select implement"
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(private basketService: BasketService, private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if(basketId) this.basketService.getBasket(basketId);
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
      this.accountService.loadCurentUser(token).subscribe();
  }
}

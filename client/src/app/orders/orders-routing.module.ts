import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailedComponent } from '../order-detailed/order-detailed.component';

//Added routes for Orders
const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path:':id', component: OrderDetailedComponent, data: {breadcrumb: {alias: 'OrderDetailed' }}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

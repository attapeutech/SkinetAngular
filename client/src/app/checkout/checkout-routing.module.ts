import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  {path: '', component: CheckoutComponent},
  {path: 'success', component: CheckoutSuccessComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }

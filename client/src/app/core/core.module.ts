import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule //need to import this, otherwise links won't work
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }

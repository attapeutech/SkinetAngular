import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: StepperComponent}]
})
//export class StepperComponent implements OnInit {

  //constructor() { }

  //ngOnInit(): void {
  //}

//}
export class StepperComponent extends CdkStepper implements OnInit {
  //The previous steps need to be done before the next
  @Input() linearModeSelected = true;
  
  ngOnInit(): void {
    this.linear = this.linearModeSelected;
  }

  onClick(index: number) {
    this.selectedIndex = index;
  }
}

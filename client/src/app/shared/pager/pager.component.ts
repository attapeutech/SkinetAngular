import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
//export class PagerComponent implements OnInit {

  //constructor() { }

  //ngOnInit(): void {
  //}

//}
//Child component
export class PagerComponent {
  //Create class properties
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Output() pageChanged = new EventEmitter<number>(); //outputting number

  onPagerChanged(event: any)
  {
    this.pageChanged.emit(event.page);
  }
}

import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
//export class SectionHeaderComponent implements OnInit {

  //constructor(public bcService: BreadcrumbService) {}

  //ngOnInit(): void {
  //}

//}
export class SectionHeaderComponent {
  constructor(public bcService: BreadcrumbService) {}
}

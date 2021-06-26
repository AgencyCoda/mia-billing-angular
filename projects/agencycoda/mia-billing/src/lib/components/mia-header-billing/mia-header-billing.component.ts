import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mia-header-billing',
  templateUrl: './mia-header-billing.component.html',
  styleUrls: ['./mia-header-billing.component.css']
})
export class MiaHeaderBillingComponent implements OnInit {

  @Input() title = '';
  @Input() logo = '';

  constructor() { }

  ngOnInit(): void {
  }

}

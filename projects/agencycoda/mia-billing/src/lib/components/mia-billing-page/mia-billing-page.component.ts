import { Component, Input, OnInit } from '@angular/core';

export class MiaBillingPageConfig {
  logoImage = '';
}

@Component({
  selector: 'mia-billing-page',
  templateUrl: './mia-billing-page.component.html',
  styleUrls: ['./mia-billing-page.component.css']
})
export class MiaBillingPageComponent implements OnInit {

  @Input() config = new MiaBillingPageConfig();

  constructor() { }

  ngOnInit(): void {
  }

}

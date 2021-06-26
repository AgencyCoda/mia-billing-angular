import { Component, Input, OnInit } from '@angular/core';
import { MiaBuyItem } from '../../entities/mia_buy_item';

export class MiaBillingPageConfig {
  title = '';
  logoImage = '';
  hasHeader = true;
  buyItem = new MiaBuyItem()
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

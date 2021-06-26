import { Component, Input, OnInit } from '@angular/core';
import { MiaBuyItem } from '../../entities/mia_buy_item';

@Component({
  selector: 'mia-resume-billing',
  templateUrl: './mia-resume-billing.component.html',
  styleUrls: ['./mia-resume-billing.component.css']
})
export class MiaResumeBillingComponent implements OnInit {

  @Input() buyItem = new MiaBuyItem();

  constructor() { }

  ngOnInit(): void {
  }

}

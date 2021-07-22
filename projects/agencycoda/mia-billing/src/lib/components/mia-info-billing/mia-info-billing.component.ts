import { MiaField, MiaFormComponent, MiaFormConfig } from '@agencycoda/mia-form';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'mia-info-billing',
  templateUrl: './mia-info-billing.component.html',
  styleUrls: ['./mia-info-billing.component.css']
})
export class MiaInfoBillingComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  @Input() item: any;
  @Output() continue = new EventEmitter<any>();

  configForm!: MiaFormConfig;

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onClickContinue() {
    this.miaForm.submit().subscribe(result => {
      this.continue.emit(result);
    })
  }

  loadConfig() {
    this.configForm = new MiaFormConfig();
    this.configForm.hasSubmit = false;
    this.configForm.fields = [
      { key: 'row-one', type: MiaField.TYPE_ROW, extra: { fields: [
        { key: 'firstname', type: MiaField.TYPE_STRING, label: 'Firstname', validators: [Validators.required] },
        { key: 'lastname', type: MiaField.TYPE_STRING, label: 'Lastname' },
      ] }  },
      { key: 'address', type: MiaField.TYPE_STRING, label: 'Address' },
      { key: 'row-two', type: MiaField.TYPE_ROW, extra: { fields: [
        { key: 'city', type: MiaField.TYPE_STRING, label: 'City' },
        { key: 'state', type: MiaField.TYPE_STRING, label: 'State' },
        { key: 'zip_code', type: MiaField.TYPE_STRING, label: 'Zip code' },
      ] }  },
    ];

    this.configForm.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }
}

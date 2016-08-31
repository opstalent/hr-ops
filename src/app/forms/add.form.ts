import { Component, OnInit }        from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  Validators
}                                   from '@angular/forms';

import { ControlMessagesComponent } from '../control-messages/control-messages.component';

@Component({
  selector: 'my-add-form',
  templateUrl: './add.form.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessagesComponent]
})

export class SearchFormComponent implements OnInit {

  private form: any;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      'user': ['', Validators.required],
      'skills': ['', Validators.required],
      'source': ['', Validators.required]
    });
  }

  add() {
    if (this.form.dirty && this.form.valid) {
      alert(`Name: ${this.form.value.email}`);
    }
  }
}

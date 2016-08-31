import { Component, OnInit }        from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  Validators
}                                   from '@angular/forms';

import { ControlMessagesComponent } from '../control-messages/control-messages.component';
import { LeadService } from '../services/lead.service';

@Component({
  selector: 'my-add-form',
  templateUrl: './add.form.html',
  directives: [REACTIVE_FORM_DIRECTIVES, ControlMessagesComponent]
})

export class AddFormComponent implements OnInit {

  private form: any;

  constructor(private builder: FormBuilder, private leadService: LeadService) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      'user': ['', Validators.required],
      'skills': ['', Validators.required],
      'source': ['', Validators.required]
    });
  }

  create() {
    if (this.form.dirty && this.form.valid) {
        console.log(this.leadService.createLead(this.form.value))
        this.leadService.createLead(this.form.value);
    }
  }
}

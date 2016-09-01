import { Component, OnInit, Input }  from '@angular/core';
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
  @Input() lead;

  constructor(private builder: FormBuilder, private leadService: LeadService) {}

  ngOnInit(): void {
  // this.form.value = this.lead;
  console.log(this.lead, 'asdasd')
    
    this.form = this.builder.group({
      'user': ['', Validators.required],
      'skills': ['', Validators.required],
      'source': ['', Validators.required],
      'assigned': ['', ],
      'bookmark': ['', ],
      'comment': ['', ],
      'contact_date': ['', Validators.required],
      'contact_result': ['', Validators.required],
      'date': ['', ],
      'decision': ['', ],
      'decision_date': ['', ],
      'future_projects_decision': ['', ],
      'interview_date': ['', ],
      'lead_from': ['', ],
      'overall': ['', ],
      'reason': ['', ],
      'recruitment_decision': ['', ],
      'responce_till': ['', ],
      'second_contact': ['', ],
      'sent': ['', ],
      'technicial_veryfication': ['', ]
    });
  }

  create() {
    if (this.form.dirty && this.form.valid) {
        this.leadService.createLead(this.form.value);
    }
  }
}

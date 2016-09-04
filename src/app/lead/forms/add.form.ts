import { Component, OnInit, Input }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { FormBuilder, Validators }   from '@angular/forms';

import { LeadService } from '../lead.service';

import * as moment from 'moment';

@Component({
  selector: 'my-add-form',
  templateUrl: './add.form.html',
  styleUrls: ['./add.form.scss']
})

export class AddFormComponent implements OnInit {

  private id: string;
  private form: any;
  private currentDate: string;

  constructor(private route: ActivatedRoute, private builder: FormBuilder, private leadService: LeadService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.currentDate = moment().format('YYYY-MM-DD');

    // this.leadService.getSingleLead(this.id)
    //   .subscribe(lead => {
    //     this.form.patchValue(lead)
    // });

    this.form = this.builder.group({
      'user': ['', Validators.required],
      'skills': ['', Validators.required],
      'source': ['', Validators.required],
      'assigned': ['', ],
      'bookmark': ['', ],
      'comment': ['', ],
      'contact_date': [this.currentDate, Validators.required],
      'contact_result': ['', Validators.required],
      'date': [this.currentDate, ],
      'decision': ['', ],
      'decision_date': [this.currentDate, ],
      'future_projects_decision': ['', ],
      'interview_date': [this.currentDate, ],
      'lead_from': ['', ],
      'overall': ['', ],
      'reason': ['', ],
      'recruitment_decision': ['', ],
      'responce_till': ['', ],
      'second_contact': ['', ],
      'sent': ['', ],
      'technical_verification': ['', ]
    });
  }

  create() {
    if (this.form.dirty && this.form.valid) {
      if (this.id === undefined) {
        this.leadService.createLead(this.form.value);
      } else {
       this.leadService.updateLead(this.id, this.form.value);
      }
    }
  }

   updateVehicle($event) {
     console.log($event)
        this.form.value.overall = $event;
    }

}

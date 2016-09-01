import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { LeadService }        from '../services/lead.service';
import { AddFormComponent }   from '../forms/add.form';

@Component({
  selector: 'my-update',
  templateUrl: 'update.component.html',
  styleUrls: ['./update.component.scss'],
  directives: [AddFormComponent]
})

export class UpdateComponent implements OnInit { 
  
  public lead;
  constructor(private route: ActivatedRoute, private leadService: LeadService) {}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.leadService.getSingleLead(id)
    .subscribe(lead => {
      this.lead = lead;
      console.log(this.lead)
    });
  }
  
  
}

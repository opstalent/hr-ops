import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadService } from '../services/lead.service';

@Component({
  selector: 'my-lead',
  templateUrl: 'lead.component.html',
  styleUrls: ['./lead.component.scss']
})

export class LeadComponent implements OnInit { 

  private lead;
  
  constructor(private route: ActivatedRoute, private leadService: LeadService) {}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.leadService.getSingleLead(id)
    .subscribe(lead => {
      this.lead = lead;
    });
  }

}

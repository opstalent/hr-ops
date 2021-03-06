import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../lead.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-leads',
  templateUrl: 'leads.component.html',
  styleUrls: ['./leads.component.scss']
})

export class LeadsComponent implements OnInit { 

  private query: string;
  private leads;
  
  constructor(private leadService: LeadService) {
     this.leads = null;
  }

  search() {
    this.leadService.updateUser(this.query);
    if (this.query.length > 2) {    
      this.leadService.searchUser().subscribe(leads => this.leads = leads);
    }
  }
  
  ngOnInit() {
    this.leadService.getLeads().subscribe(leads => {
      this.leads = leads
      console.log(this.leads)
    });
  }
  
}

import { Component, OnInit } from '@angular/core';
import {LeadService} from '../services/lead.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-leads',
  templateUrl: 'leads.component.html',
  styleUrls: ['./leads.component.scss'],
  providers: [LeadService]
})

export class LeadsComponent implements OnInit { 

  private username: string;
  private user;
  
  constructor(private leadService: LeadService) {
     this.user = null;
  }

  search() {
    this.leadService.updateUser(this.username);
    if (this.username.length > 3) {    
      this.leadService.searchUser() .subscribe(user => this.user = user);
    }
  }
  
  ngOnInit() {

  }
  
  
}

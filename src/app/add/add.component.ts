import { Component, OnInit } from '@angular/core';
import { LeadService }       from '../services/lead.service';

@Component({
  selector: 'my-add',
  templateUrl: 'add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit { 
  
  constructor(private leadService: LeadService) {}

  search() {
    
  }
  
  ngOnInit() {

  }
  
  
}

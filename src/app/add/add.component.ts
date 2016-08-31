import { Component, OnInit } from '@angular/core';
import { LeadService }       from '../services/lead.service';
import { AddFormComponent }  from '../forms/add.form';

@Component({
  selector: 'my-add',
  templateUrl: 'add.component.html',
  styleUrls: ['./add.component.scss'],
  directives: [AddFormComponent]
})

export class AddComponent implements OnInit { 
  
  constructor(private leadService: LeadService) {}

  search() {
    
  }
  
  ngOnInit() {

  }
  
  
}

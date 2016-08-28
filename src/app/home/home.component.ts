import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/forms'; 

import 'rxjs/add/operator/map';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  directives: [FORM_DIRECTIVES],
  providers: []
})

export class HomeComponent implements OnInit {

    constructor() {
    }

  ngOnInit() {}

 
}

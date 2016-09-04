import { Component }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { LeadService }        from '../../lead.service';

@Component({
  selector: 'my-update',
  templateUrl: 'update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent { 

  constructor(private route: ActivatedRoute, private leadService: LeadService) {}
  
}

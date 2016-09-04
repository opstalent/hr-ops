import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import { LeadComponent } from './components/lead/lead.component';
import { LeadsComponent } from './components/leads/leads.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

import { AddFormComponent } from './forms/add.form';
import { SearchFormComponent } from './forms/search.form';

import { LeadService } from './lead.service';

import { routing } from './lead.routing';

@NgModule({
  imports: [
   SharedModule,
   routing
  ],
  declarations: [
    LeadComponent,
    LeadsComponent,
    AddComponent,
    UpdateComponent,
    AddFormComponent,
    SearchFormComponent
  ],
  entryComponents: [AddFormComponent],
  providers: [
    LeadService
  ]
})
export class LeadModule {}

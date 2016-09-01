import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { LeadComponent }   from './lead/lead.component';
import { LeadsComponent }  from './leads/leads.component';
import { AddComponent }    from './add/add.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leads', component: LeadsComponent},
  { path: 'leads/:id', component: LeadComponent},
  { path: 'add', component: AddComponent},
  { path: 'update/:id', component: UpdateComponent}
];

export const routing = RouterModule.forRoot(routes);

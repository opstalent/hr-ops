import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { LeadsComponent } from './leads/leads.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leads', component: LeadsComponent},
  { path: 'leads/:id', component: LeadComponent},
  { path: 'add', component: AddComponent}
];

export const routing = RouterModule.forRoot(routes);

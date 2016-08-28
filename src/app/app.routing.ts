import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'leads', component: LeadsComponent}
];

export const routing = RouterModule.forRoot(routes);

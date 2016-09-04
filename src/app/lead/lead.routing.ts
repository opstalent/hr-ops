import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LeadsComponent} from "./components/leads/leads.component";
import {LeadComponent} from "./components/lead/lead.component";
import {AddComponent} from "./components/add/add.component";
import {UpdateComponent} from "./components/update/update.component";


const routes: Routes = [
    { path: '', component: LeadsComponent},
    { path: 'leads/:id', component: LeadComponent},
    { path: 'add', component: AddComponent},
    { path: 'update/:id', component: UpdateComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

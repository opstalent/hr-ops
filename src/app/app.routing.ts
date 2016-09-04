import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {path: 'leads', loadChildren: 'app/lead/lead.module#LeadsModule'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

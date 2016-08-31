import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
import { LeadsComponent } from './leads/leads.component';
import { AddComponent } from './add/add.component';

import { LeadService } from './services/lead.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LeadComponent,
    LeadsComponent,
    AddComponent
  ],
  providers: [
    LeadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

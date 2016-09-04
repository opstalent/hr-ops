import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {LeadModule} from "./lead/lead.module";
import {CoreModule} from "./core/core.module";
import {routing, appRoutingProviders} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        LeadModule,
        CoreModule,
        routing
    ],
    declarations: [AppComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}

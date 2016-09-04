import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControlMessagesComponent} from "./components/control-messages/control-messages.component";

@NgModule({
    imports: [CommonModule,HttpModule, FormsModule, ReactiveFormsModule],
    declarations: [ControlMessagesComponent],
    exports: [ControlMessagesComponent,HttpModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class SharedModule {}

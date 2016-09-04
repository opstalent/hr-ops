import {NgModule, Optional, SkipSelf} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [RouterModule, SharedModule],
    declarations: [FooterComponent, HeaderComponent],
    exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

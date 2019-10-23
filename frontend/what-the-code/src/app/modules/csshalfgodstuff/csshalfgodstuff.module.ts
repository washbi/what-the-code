import {NgModule} from "@angular/core";
import {CsshalfgodstuffComponent} from "./csshalfgodstuff.component";
import {CsshalfgodstuffRoutingModule} from "./csshalfgodstuff-routing.module";
import {SharedModule} from "../../shared-modules/shared.module";

@NgModule({
  declarations: [
    CsshalfgodstuffComponent,
  ],
  imports: [
    SharedModule,
    CsshalfgodstuffRoutingModule
  ],
  exports: [
  ]
})
export class CsshalfgodstuffModule { }

import {NgModule} from "@angular/core";
import {CsshalfgodstuffComponent} from "./csshalfgodstuff.component";
import {CsshalfgodstuffRoutingModule} from "./csshalfgodstuff-routing.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    CsshalfgodstuffComponent,
  ],
  imports: [
    BrowserModule,
    CsshalfgodstuffRoutingModule
  ],
  exports: [
  ]
})
export class CsshalfgodstuffModule { }

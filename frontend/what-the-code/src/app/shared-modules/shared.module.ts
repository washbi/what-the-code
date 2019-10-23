import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {WtcTerminalBoxComponent} from "./wtc-terminal-box/wtc-terminal-box.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    WtcTerminalBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    WtcTerminalBoxComponent
  ]
})
export class SharedModule { }

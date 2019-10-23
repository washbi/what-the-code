import {NgModule} from "@angular/core";
import {WtcTerminalBoxComponent} from "./wtc-terminal-box/wtc-terminal-box.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WtcTerminalBoxComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,

    WtcTerminalBoxComponent,
  ]
})
export class SharedModule { }

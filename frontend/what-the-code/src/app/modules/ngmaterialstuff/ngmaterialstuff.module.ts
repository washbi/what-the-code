import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgmaterialstuffRoutingModule} from "./ngmaterialstuff-routing.module";
import {NgmaterialstuffComponent} from "./ngmaterialstuff.component";

@NgModule({
  declarations: [
    NgmaterialstuffComponent
  ],
  imports: [
    BrowserModule,
    NgmaterialstuffRoutingModule
  ],
  exports: [
  ]
})
export class NgmaterialstuffModule { }

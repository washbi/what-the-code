import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgadvancedstuffComponent} from "./ngadvancedstuff.component";
import {NgadvancedstuffRoutingModule} from "./ngadvancedstuff-routing.module";
import { FlexLayoutDemoComponent } from './components/flex-layout-demo/flex-layout-demo.component';

@NgModule({
  declarations: [
    NgadvancedstuffComponent,
    FlexLayoutDemoComponent
  ],
  imports: [
    BrowserModule,
    NgadvancedstuffRoutingModule
  ],
  exports: [
  ]
})
export class NgadvancedstuffModule { }

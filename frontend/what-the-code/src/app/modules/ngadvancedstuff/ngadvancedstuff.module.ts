import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgadvancedstuffComponent} from "./ngadvancedstuff.component";
import {NgadvancedstuffRoutingModule} from "./ngadvancedstuff-routing.module";
import { FlexLayoutDemoComponent } from './components/flex-layout-demo/flex-layout-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FlexLayoutDemoItemComponent } from './components/flex-layout-demo/flex-layout-demo-item/flex-layout-demo-item.component';
import {SharedModule} from "../../shared-modules/shared.module";

@NgModule({
  declarations: [
    NgadvancedstuffComponent,
    FlexLayoutDemoComponent,
    FlexLayoutDemoItemComponent,
  ],
  imports: [
    BrowserModule,
    NgadvancedstuffRoutingModule,
    DragDropModule,
    FlexLayoutModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
  ]
})
export class NgadvancedstuffModule { }

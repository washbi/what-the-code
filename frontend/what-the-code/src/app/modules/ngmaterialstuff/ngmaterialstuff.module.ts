import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgmaterialstuffRoutingModule} from "./ngmaterialstuff-routing.module";
import {NgmaterialstuffComponent} from "./ngmaterialstuff.component";
import { DragNDropListComponent } from './components/drag-n-drop-list/drag-n-drop-list.component';
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    NgmaterialstuffComponent,
    DragNDropListComponent
  ],
  imports: [
    BrowserModule,
    NgmaterialstuffRoutingModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class NgmaterialstuffModule { }

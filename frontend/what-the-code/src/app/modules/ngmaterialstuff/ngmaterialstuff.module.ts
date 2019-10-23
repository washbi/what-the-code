import {NgModule} from "@angular/core";
import {NgmaterialstuffRoutingModule} from "./ngmaterialstuff-routing.module";
import {NgmaterialstuffComponent} from "./ngmaterialstuff.component";
import { DragNDropListComponent } from './components/drag-n-drop-list/drag-n-drop-list.component';
import {MaterialModule} from "./material.module";
import {FontSwitcherComponent} from "./components/font-switcher/font-switcher.component";
import {RemoveQuotationMarks} from "./components/font-switcher/pipes/remove-quotation-marks";
import {TransformToSelector} from "./components/font-switcher/pipes/transform-to-selector";
import {SharedModule} from "../../shared-modules/shared.module";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    NgmaterialstuffComponent,
    DragNDropListComponent,
    FontSwitcherComponent,
    RemoveQuotationMarks,
    TransformToSelector
  ],
  imports: [
    SharedModule,
    NgmaterialstuffRoutingModule,
    MaterialModule,
    DragDropModule
  ],
  exports: [
  ]
})
export class NgmaterialstuffModule { }

import {NgModule} from "@angular/core";
import {NgadvancedstuffComponent} from "./ngadvancedstuff.component";
import {NgadvancedstuffRoutingModule} from "./ngadvancedstuff-routing.module";
import { FlexLayoutDemoComponent } from './components/flex-layout-demo/flex-layout-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FlexLayoutDemoItemComponent } from './components/flex-layout-demo/flex-layout-demo-item/flex-layout-demo-item.component';
import {SharedModule} from "../../shared-modules/shared.module";
import { WtcHeroComponent } from './components/flex-layout-demo/wtc-hero/wtc-hero.component';

@NgModule({
  declarations: [
    NgadvancedstuffComponent,
    FlexLayoutDemoComponent,
    FlexLayoutDemoItemComponent,
    WtcHeroComponent,
  ],
  imports: [
    SharedModule,
    NgadvancedstuffRoutingModule,
    DragDropModule,
    FlexLayoutModule,
  ],
  exports: [
  ]
})
export class NgadvancedstuffModule { }

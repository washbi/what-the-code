import {NgModule} from "@angular/core";
import {PouchdbComponent} from "./pouchdb.component";
import {PouchdbRoutingModule} from "./pouchdb-routing.module";
import { WtcHistoryOverviewComponent } from './components/wtc-history-overview/wtc-history-overview.component';
import {SharedModule} from "../../shared-modules/shared.module";

@NgModule({
  declarations: [
    PouchdbComponent,
    WtcHistoryOverviewComponent
  ],
  imports: [
    SharedModule,
    PouchdbRoutingModule
  ],
  exports: [
  ]
})
export class PouchdbModule { }

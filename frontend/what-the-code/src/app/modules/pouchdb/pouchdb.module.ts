import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PouchdbComponent} from "./pouchdb.component";
import {PouchdbRoutingModule} from "./pouchdb-routing.module";
import { WtcHistoryOverviewComponent } from './components/wtc-history-overview/wtc-history-overview.component';

@NgModule({
  declarations: [
    PouchdbComponent,
    WtcHistoryOverviewComponent
  ],
  imports: [
    BrowserModule,
    PouchdbRoutingModule
  ],
  exports: [
  ]
})
export class PouchdbModule { }

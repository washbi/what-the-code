import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PouchdbComponent} from "./pouchdb.component";

const routes: Routes = [
  {path: 'pouchdb', component: PouchdbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PouchdbRoutingModule { }

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NgadvancedstuffComponent} from "./ngadvancedstuff.component";

const routes: Routes = [
  {path: 'ngadvancedstuff', component: NgadvancedstuffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgadvancedstuffRoutingModule { }

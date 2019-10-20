import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NgmaterialstuffComponent} from "./ngmaterialstuff.component";

const routes: Routes = [
  {path: 'ngmaterialstuff', component: NgmaterialstuffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgmaterialstuffRoutingModule { }

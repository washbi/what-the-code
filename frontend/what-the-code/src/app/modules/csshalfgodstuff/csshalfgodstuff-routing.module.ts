import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CsshalfgodstuffComponent} from "./csshalfgodstuff.component";

const routes: Routes = [
  {path: 'csshalfgodstuff', component: CsshalfgodstuffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CsshalfgodstuffRoutingModule { }

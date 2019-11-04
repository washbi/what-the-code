import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NgadvancedstuffComponent} from "./ngadvancedstuff.component";
import {FlexLayoutDemoComponent} from "./components/flex-layout-demo/flex-layout-demo.component";
import {FirebaseComponent} from "./components/firebase/firebase.component";

const routes: Routes = [
  { path: 'ngadvancedstuff',
    component: NgadvancedstuffComponent,
    children: [
      {path: 'flex-layout-demo', component: FlexLayoutDemoComponent},
      {path: 'firebase', component: FirebaseComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgadvancedstuffRoutingModule { }

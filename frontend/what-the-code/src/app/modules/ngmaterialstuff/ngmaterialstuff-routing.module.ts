import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NgmaterialstuffComponent} from "./ngmaterialstuff.component";
import {DragNDropListComponent} from "./components/drag-n-drop-list/drag-n-drop-list.component";
import {FontSwitcherComponent} from "./components/font-switcher/font-switcher.component";

const routes: Routes = [
  { path: 'ngmaterialstuff',
    component: NgmaterialstuffComponent,
    children: [
      { path: 'drag-n-drop-list', component: DragNDropListComponent},
      { path: 'font-switcher', component: FontSwitcherComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgmaterialstuffRoutingModule { }

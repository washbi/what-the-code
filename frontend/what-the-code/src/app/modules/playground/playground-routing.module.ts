import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaygroundComponent} from "./playground.component";


const routes: Routes = [
  {path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }

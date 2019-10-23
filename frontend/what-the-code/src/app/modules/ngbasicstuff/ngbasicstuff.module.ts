import {NgModule} from "@angular/core";
import {NgbasicstuffComponent} from "./ngbasicstuff.component";
import {NgbasicstuffRoutingModule} from "./ngbasicstuff-routing.module";
import { ActivatedRouteDemoComponent } from './components/activated-route-demo/activated-route-demo.component';
import { RouteChoiceStartComponent } from './components/activated-route-demo/route-choice-start/route-choice-start.component';
import { PokemonDetailsComponent } from './components/activated-route-demo/pokemon-details/pokemon-details.component';
import { HogwartsDetailsComponent } from './components/activated-route-demo/hogwarts-details/hogwarts-details.component';
import {SharedModule} from "../../shared-modules/shared.module";

@NgModule({
  declarations: [
    NgbasicstuffComponent,
    ActivatedRouteDemoComponent,
    RouteChoiceStartComponent,
    PokemonDetailsComponent,
    HogwartsDetailsComponent,
  ],
  imports: [
    SharedModule,
    NgbasicstuffRoutingModule
  ],
  exports: [
  ]
})
export class NgbasicstuffModule { }

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NgbasicstuffComponent} from "./ngbasicstuff.component";
import {ActivatedRouteDemoComponent} from "./components/activated-route-demo/activated-route-demo.component";
import {RouteChoiceStartComponent} from "./components/activated-route-demo/route-choice-start/route-choice-start.component";
import {PokemonDetailsComponent} from "./components/activated-route-demo/pokemon-details/pokemon-details.component";
import {HogwartsDetailsComponent} from "./components/activated-route-demo/hogwarts-details/hogwarts-details.component";
import {ReactiveFormsDemoComponent} from "./components/reactive-forms-demo/reactive-forms-demo.component";
import {TemplateDrivenFormsDemoComponent} from "./components/template-driven-forms-demo/template-driven-forms-demo.component";
import {AnimationsDemoComponent} from "./components/animations-demo/animations-demo.component";

const routes: Routes = [
  {
    path: 'ngbasicstuff',
    component: NgbasicstuffComponent,
    children: [
      {
        path: 'activated-route-demo',
        component: ActivatedRouteDemoComponent,
        children: [
          { path: '', redirectTo: 'start', pathMatch: 'full'},
          { path: 'start', component: RouteChoiceStartComponent},
          { path: 'route-choice-one/:pokemonId', component: PokemonDetailsComponent},
          { path: 'route-choice-two/:hogwartsHouseName', component: HogwartsDetailsComponent}
        ]
      },
      { path: 'reactive-forms-demo', component: ReactiveFormsDemoComponent },
      { path: 'template-driven-forms-demo', component: TemplateDrivenFormsDemoComponent },
      { path: 'animations-demo', component: AnimationsDemoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NgbasicstuffRoutingModule { }

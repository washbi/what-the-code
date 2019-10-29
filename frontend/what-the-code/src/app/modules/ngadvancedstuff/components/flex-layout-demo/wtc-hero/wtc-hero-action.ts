import {ModulePlanet} from "../../../../../wtc-mock-data/module-planets/module-planet";
import {WtcHeroState} from "./wtc-hero-state";

export class WtcHeroAction {

  state: WtcHeroState;
  collidedPlanets: ModulePlanet[];

  constructor(state: WtcHeroState, collidedPlanets: ModulePlanet[]) {
    this.state = state;
    this.collidedPlanets = collidedPlanets;
  }
}

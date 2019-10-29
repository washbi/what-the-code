import {Injectable} from "@angular/core";
import {ModulePlanetDataService} from "../../../../../wtc-mock-data/module-planets/module-planet-data.service";
import {CanvasPositionsService} from "../service/canvas-positions.service";
import {Subject} from "rxjs";
import {WtcHeroAction} from "./wtc-hero-action";
import {WtcHeroState} from "./wtc-hero-state";

@Injectable({ providedIn: 'root' })
export class WtcHeroService {

  heroAction$ = new Subject<WtcHeroAction>();

  constructor(private planetService: ModulePlanetDataService,
              private canvasService: CanvasPositionsService) {
  }

  public checkIfHeroCollidesWithPlanet(heroRect: ClientRect) {
    const modulePlanets = this.planetService.getPlanets().filter(planet => {
      const planetRect = document.getElementById(`${planet.id}`).getBoundingClientRect();
      return this.canvasService.checkIfRectangleDivsCollide(heroRect, planetRect);
    });

    if (modulePlanets.length > 0) {
      this.heroAction$.next(new WtcHeroAction(WtcHeroState.FOCUS, modulePlanets));
    } else {
      this.heroAction$.next(new WtcHeroAction(WtcHeroState.IDLE, []));
    }
  }

}

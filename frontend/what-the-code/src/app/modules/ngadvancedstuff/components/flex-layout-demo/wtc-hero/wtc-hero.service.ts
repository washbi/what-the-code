import {Injectable} from "@angular/core";
import {ModulePlanetDataService} from "../../../../../wtc-mock-data/module-planets/module-planet-data.service";
import {CanvasPositionsService} from "../service/canvas-positions.service";

@Injectable({ providedIn: 'root' })
export class WtcHeroService {

  constructor(private planetService: ModulePlanetDataService,
              private canvasService: CanvasPositionsService) {
  }


  public checkIfHeroCollidesWithPlanet(heroRect: ClientRect) {
    let modulePlanets = this.planetService.getPlanets().filter(planet => {
      const planetRect = document.getElementById(`${planet.id}`).getBoundingClientRect();
      return this.canvasService.checkIfRectangleDivsCollide(heroRect, planetRect);
    });

    console.log(modulePlanets);
  }

}

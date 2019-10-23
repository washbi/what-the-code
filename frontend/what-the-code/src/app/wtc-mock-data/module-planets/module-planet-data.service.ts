import {Injectable} from "@angular/core";
import {ModulePlanet} from "./module-planet";

@Injectable({
  providedIn: 'root'
})
export class ModulePlanetDataService {

  planets: ModulePlanet [] = [
    { id: 0, name: 'Angular Basic Stuff', posX: 20, posY: 10, icon: 'angular-basic-icon.svg', url: 'ngbasicstuff'},
    { id: 1, name: 'Angular Material Stuff', posX: 40, posY: 10, icon: 'angular-material-icon.svg', url: 'ngmaterialstuff'},
    { id: 2, name: 'Angular Advanced Stuff', posX: 60, posY: 10, icon: 'angular-icon-1.svg', url: 'ngadvancedstuff'},
    { id: 3, name: 'CSS Halfgod Stuff', posX: 80, posY: 10, icon: 'css-3-icon.svg', url: 'csshalfgodstuff'},
    { id: 4, name: 'Pouch DB', posX: 20, posY: 45, icon: 'PouchDB-01.svg', url: 'pouchdb'},
    { id: 5, name: 'Playground', posX: 50, posY: 45, icon: 'earth-playground.svg', url: 'playground'},
  ];

  public getPlanets(): ModulePlanet[] {
    return this.planets;
  }

  public updatePosition(planet: ModulePlanet, posX: number, posY: number) {

  }

}

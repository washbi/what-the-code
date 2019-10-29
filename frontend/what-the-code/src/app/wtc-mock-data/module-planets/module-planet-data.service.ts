import {Injectable} from "@angular/core";
import {ModulePlanet} from "./module-planet";

@Injectable({
  providedIn: 'root'
})
export class ModulePlanetDataService {

  planets: ModulePlanet [] = [
    { id: 0, name: 'Angular Basic Stuff', posX: 22, posY: 8, icon: 'angular-basic-icon.svg', url: 'ngbasicstuff'},
    { id: 1, name: 'Angular Material Stuff', posX: 43, posY: 12, icon: 'angular-material-icon.svg', url: 'ngmaterialstuff'},
    { id: 2, name: 'Angular Advanced Stuff', posX: 61, posY: 10, icon: 'angular-icon-1.svg', url: 'ngadvancedstuff'},
    { id: 3, name: 'CSS Halfgod Stuff', posX: 65, posY: 55, icon: 'css-3-icon.svg', url: 'csshalfgodstuff'},
    { id: 4, name: 'Pouch DB', posX: 17, posY: 45, icon: 'PouchDB-01.svg', url: 'pouchdb'},
    { id: 5, name: 'Playground', posX: 50, posY: 48, icon: 'earth-playground.svg', url: 'playground'},
  ];

  public getPlanets(): ModulePlanet[] {
    return this.planets;
  }

}

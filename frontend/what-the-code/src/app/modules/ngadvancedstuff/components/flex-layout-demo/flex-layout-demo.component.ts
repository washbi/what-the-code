import { Component, OnInit } from '@angular/core';
import {ModulePlanetDataService} from "../../../../wtc-mock-data/module-planets/module-planet-data.service";
import {ModulePlanet} from "../../../../wtc-mock-data/module-planets/module-planet";
import {CanvasPositionsService} from "./service/canvas-positions.service";

@Component({
  selector: 'app-flex-layout-demo',
  templateUrl: './flex-layout-demo.component.html',
  styleUrls: ['./flex-layout-demo.component.css']
})
export class FlexLayoutDemoComponent implements OnInit {

  planets: ModulePlanet[] = [];

  constructor(public canvasService: CanvasPositionsService, private modulePlanetsData: ModulePlanetDataService) {
  }

  ngOnInit() {
    this.planets = this.modulePlanetsData.getPlanets();
  }

}

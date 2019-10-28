import { Component, OnInit } from '@angular/core';
import {CdkDragRelease} from "@angular/cdk/drag-drop";
import {CanvasPositionsService} from "../service/canvas-positions.service";
import {WtcHeroService} from "./wtc-hero.service";

@Component({
  selector: 'app-wtc-hero',
  templateUrl: './wtc-hero.component.html',
  styleUrls: ['./wtc-hero.component.css']
})
export class WtcHeroComponent implements OnInit {

  itemTop: 0;
  itemLeft: 0;

  constructor(private wtcHeroService: WtcHeroService,
              public canvasService: CanvasPositionsService) {
  }

  ngOnInit() {
  }

  public handleDragReleaseEvent(released: CdkDragRelease) {
    const rect = released.source.element.nativeElement.getBoundingClientRect();
    this.wtcHeroService.checkIfHeroCollidesWithPlanet(rect);
  }
}

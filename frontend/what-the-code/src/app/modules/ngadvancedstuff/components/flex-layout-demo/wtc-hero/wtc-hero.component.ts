import {Component, OnInit} from '@angular/core';
import {CdkDragRelease} from "@angular/cdk/drag-drop";
import {CanvasPositionsService} from "../service/canvas-positions.service";
import {WtcHeroService} from "./wtc-hero.service";
import {WtcHeroAction} from "./wtc-hero-action";
import {WtcHeroState} from "./wtc-hero-state";
import {Router} from "@angular/router";
import {ModulePlanet} from "../../../../../wtc-mock-data/module-planets/module-planet";

@Component({
  selector: 'app-wtc-hero',
  templateUrl: './wtc-hero.component.html',
  styleUrls: ['./wtc-hero.component.css']
})
export class WtcHeroComponent implements OnInit {

  heroImageId = 'hero-image';

  itemTop: 0;
  itemLeft: 0;

  heroState = WtcHeroState.IDLE;
  targetPlanet: ModulePlanet;

  constructor(private wtcHeroService: WtcHeroService,
              public canvasService: CanvasPositionsService,
              private router: Router) {

    this.wtcHeroService.heroAction$.subscribe((heroAction:WtcHeroAction) => {
      this.heroState = heroAction.state;
      if (heroAction.collidedPlanets.length > 0) {
        this.targetPlanet = heroAction.collidedPlanets[0];
      }
    });
  }

  ngOnInit() {
  }

  handleDragReleaseEvent(released: CdkDragRelease) {
    // get element from CdkDragRelease event
    // const rect = released.source.element.nativeElement.getBoundingClientRect();
    const rect = document.getElementById(`${this.heroImageId}`).getBoundingClientRect();
    this.wtcHeroService.checkIfHeroCollidesWithPlanet(rect);
  }

  isHeroFocusState() {
    return this.heroState === WtcHeroState.FOCUS;
  }

  onYes() {
    this.router.navigate([this.targetPlanet.url]);
  }

}

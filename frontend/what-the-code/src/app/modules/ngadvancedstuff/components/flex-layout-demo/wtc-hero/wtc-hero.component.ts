import {Component, HostBinding, OnInit} from '@angular/core';
import {CdkDragRelease} from "@angular/cdk/drag-drop";
import {CanvasPositionsService} from "../service/canvas-positions.service";
import {WtcHeroService} from "./wtc-hero.service";
import {WtcHeroAction} from "./wtc-hero-action";
import {WtcHeroState} from "./wtc-hero-state";
import {Router} from "@angular/router";
import {ModulePlanet} from "../../../../../wtc-mock-data/module-planets/module-planet";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-wtc-hero',
  templateUrl: './wtc-hero.component.html',
  styleUrls: ['./wtc-hero.component.css'],
  animations: [
    trigger('heroFlyInAnimation', [
      state('true', style({
        transform: 'translate(100px,50px)'
      })),
      transition('void => true', [
        style({opacity: 0, transform: 'translate(-100px, 50px)'}),
        animate('750ms', style({ opacity: 1, transform: 'translate(100px,50px)'})),
        animate('1000ms ease-in', style({ transform: 'translate(2000px,50px)'})),
        animate('1ms', style({ transform: 'translate(-100px,50px)'})),
        animate('800ms', style({ transform: 'translate(2000px,50px)'})),
        animate('1ms', style({ transform: 'translate(-200px,50px)'})),
        animate('550ms ease-out', style({ transform: 'translate(100px,50px)'})),
      ])
    ]),
    trigger('heroEnterPlanetAnimation', [
      transition( '* => true', [
        animate('250ms', style({transform: 'rotate(90deg) scale(0.8)'})),
        animate('250ms', style({transform: 'rotate(180deg) scale(0.6)'})),
        animate('250ms', style({transform: 'rotate(270deg) scale(0.4)'})),
        animate('250ms', style({transform: 'rotate(360deg) scale(0.2)'})),
      ])
    ])
  ]
})
export class WtcHeroComponent implements OnInit {

  heroImageId = 'hero-image';

  heroEnterPlanetAnimation = false;

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
    this.heroEnterPlanetAnimation = true;
    setTimeout(() => {
      this.router.navigate([this.targetPlanet.url]);
    }, 950);
  }

}

import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModulePlanet} from "../../../../../wtc-mock-data/module-planets/module-planet";
import {Router} from "@angular/router";
import {CanvasPositionsService} from "../service/canvas-positions.service";
import {WtcHeroService} from "../wtc-hero/wtc-hero.service";
import {WtcHeroAction} from "../wtc-hero/wtc-hero-action";
import {WtcHeroState} from "../wtc-hero/wtc-hero-state";

@Component({
  selector: 'app-flex-layout-demo-item',
  templateUrl: './flex-layout-demo-item.component.html',
  styleUrls: ['./flex-layout-demo-item.component.css']
})
export class FlexLayoutDemoItemComponent implements OnInit {

  @Input() item: ModulePlanet;

  itemTop: string;
  itemLeft: string;

  itemFocussed: boolean;

  constructor(private canvasService: CanvasPositionsService,
              private wtcHeroService: WtcHeroService,
              private router: Router) {

    this.wtcHeroService.heroAction$.subscribe((heroAction: WtcHeroAction) => {

      if (heroAction &&
        heroAction.state === WtcHeroState.FOCUS &&
        heroAction.collidedPlanets.includes(this.item)) {
        this.itemFocussed = true;
      } else {
        this.itemFocussed = false;
      }

    });

  }

  ngOnInit() {
    this.setBoxPositions();
  }

  public onClickIcon() {
    this.router.navigate([this.item.url]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.canvasService.setWindowSize();
    this.setBoxPositions();
  }

  private setBoxPositions() {
    this.itemTop = this.canvasService.getYPosition(this.item.posY);
    this.itemLeft = this.canvasService.getXPosition(this.item.posX);
  }


}

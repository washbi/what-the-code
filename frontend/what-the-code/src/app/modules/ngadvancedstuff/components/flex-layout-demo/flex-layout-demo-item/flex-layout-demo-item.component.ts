import {Component, HostListener, Input, OnInit} from '@angular/core';
import {faArrowsAlt} from "@fortawesome/free-solid-svg-icons";
import {ModulePlanet} from "../../../../../wtc-mock-data/module-planets/module-planet";
import {CdkDragRelease} from "@angular/cdk/drag-drop";
import {ModulePlanetDataService} from "../../../../../wtc-mock-data/module-planets/module-planet-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flex-layout-demo-item',
  templateUrl: './flex-layout-demo-item.component.html',
  styleUrls: ['./flex-layout-demo-item.component.css']
})
export class FlexLayoutDemoItemComponent implements OnInit {

  @Input() item: ModulePlanet;

  faArrowsAlt = faArrowsAlt;

  // responsive canvas -> adjust positions of the items, if window resized
  currWindowHeight;
  currWindowWidth;
  unit = 'px';

  itemTop: string;
  itemLeft: string;

  constructor(private router: Router, private modulePlanetData: ModulePlanetDataService) { }

  ngOnInit() {
    this.currWindowHeight = window.innerHeight;
    this.currWindowWidth = window.innerWidth;
    this.setBoxPositions();
  }

  public onClickItem() {
    this.router.navigate([this.item.url]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.currWindowHeight = window.innerHeight;
    this.currWindowWidth = window.innerWidth;
    this.setBoxPositions();
  }

  private setBoxPositions() {
    this.itemTop = this.getPosition(this.item.posY, this.currWindowHeight);
    this.itemLeft = this.getPosition(this.item.posX, this.currWindowWidth);
  }

  public getPosition(x: number, winSize: number): string {
    if (x < 0) {
      return 0 + this.unit;
    }

    const xPercentage = x / 100;
    const xResult = xPercentage * winSize;

    return xResult + this.unit;
  }

  public handleDragReleaseEvent(released: CdkDragRelease) {
    const canvas = document.getElementById('drag-n-drop-boundary-container');
    const rect = released.source.element.nativeElement.getBoundingClientRect();
    // really dirty fix because absolute position is from canvas. But rect.top is from window root
    const topRelativeToParent = rect.top - canvas.offsetTop;
    const posYPercentage = Math.round(
      (topRelativeToParent / this.currWindowHeight) * 100
    );
    const posXPercentage = Math.round((rect.left / this.currWindowWidth) * 100);

    this.modulePlanetData.updatePosition(this.item, posXPercentage, posYPercentage);
  }
}

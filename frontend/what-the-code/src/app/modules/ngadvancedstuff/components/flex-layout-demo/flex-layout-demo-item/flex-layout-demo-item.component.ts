import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ModulePlanet} from "../../../../../wtc-mock-data/module-planets/module-planet";
import {Router} from "@angular/router";
import {CanvasPositionsService} from "../service/canvas-positions.service";

@Component({
  selector: 'app-flex-layout-demo-item',
  templateUrl: './flex-layout-demo-item.component.html',
  styleUrls: ['./flex-layout-demo-item.component.css']
})
export class FlexLayoutDemoItemComponent implements OnInit {

  @Input() item: ModulePlanet;

  itemTop: string;
  itemLeft: string;

  constructor(private canvasService: CanvasPositionsService, private router: Router) { }

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

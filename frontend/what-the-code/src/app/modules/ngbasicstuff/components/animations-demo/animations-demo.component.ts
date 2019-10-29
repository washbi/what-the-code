import {Component, HostBinding, OnInit} from '@angular/core';
import {animateButton, animateInputField, flyInAndOut, pageAnimation} from "./demo-animations";
import {HarryPotterDataService} from "../../../../wtc-mock-data/harry-potter/harry-potter-data.service";
import {HogwartsHouse} from "../../../../wtc-mock-data/harry-potter/hogwartsHouse";

@Component({
  selector: 'app-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.css'],
  animations: [
    animateInputField,
    animateButton,
    flyInAndOut,
    pageAnimation
  ]
})
export class AnimationsDemoComponent implements OnInit {

  @HostBinding('@pageAnimations')
  public animatePage = true;

  mouseEntered = false;
  clicked = false;
  demoItems: HogwartsHouse[];

  constructor(private hpData: HarryPotterDataService) {
    this.demoItems = this.hpData.getHogwartsHouses();
  }

  ngOnInit() {
  }

  onInputFocus() {
    this.mouseEntered = !this.mouseEntered;
  }

  onButtonClick() {
    this.clicked = !this.clicked;
  }

}

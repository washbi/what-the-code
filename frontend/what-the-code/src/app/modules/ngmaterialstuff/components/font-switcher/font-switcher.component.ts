import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-switcher',
  templateUrl: './font-switcher.component.html',
  styleUrls: ['./font-switcher.component.css']
})
export class FontSwitcherComponent implements OnInit {

  // font picker -> import fonts in index.html to make it work
  openSans = '"Open Sans"';
  share = '"Share"';
  muli = '"Muli"';
  mavenPro = '"Maven Pro"';
  zCool = '"ZCOOL QingKe HuangYou"';
  comfortaa = '"Comfortaa"';
  pressStart2P = '"Press Start 2P"';
  selectableFonts = [
    this.openSans,
    this.share,
    this.muli,
    this.mavenPro,
    this.zCool,
    this.comfortaa,
    this.pressStart2P
  ];
  selectedFont = this.openSans;

  constructor() { }

  ngOnInit() {

  }

}

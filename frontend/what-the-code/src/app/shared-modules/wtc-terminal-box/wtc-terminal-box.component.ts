import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-wtc-terminal-box',
  templateUrl: './wtc-terminal-box.component.html',
  styleUrls: ['./wtc-terminal-box.component.css']
})
export class WtcTerminalBoxComponent implements OnInit {

  @Input()
  url: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateToUrl() {
    this.router.navigate([this.url]);
  }
}

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'what-the-code';

  constructor(private router: Router) {
  }


  wtcModules = [
    {name: 'angular basic stuff', url: 'ngbasicstuff'},
    {name: 'css halfgod stuff', url: 'csshalfgodstuff'},
    {name: 'pouchdb', url: 'pouchdb'},
    {name: 'playground', url: 'playground'},
    {name: 'angular material stuff', url: 'ngmaterialstuff'},
    {name: 'angular advanced stuff', url: 'ngadvancedstuff'},
  ];

  public navigateToModule(url: string) {
    this.router.navigate([url]);
  }
}

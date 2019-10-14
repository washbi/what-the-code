import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-activated-route-demo',
  templateUrl: './activated-route-demo.component.html'
})
export class ActivatedRouteDemoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // demo data display
    this.activatedRoute.params.subscribe(params => {
      console.log('params', params);
    });
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      console.log('paramMap', paramMap);
    });
  }
}

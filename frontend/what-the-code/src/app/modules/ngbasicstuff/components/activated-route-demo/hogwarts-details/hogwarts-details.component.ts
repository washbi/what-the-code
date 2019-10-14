import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HarryPotterDataService} from "../../../../../wtc-mock-data/harry-potter/harry-potter-data.service";
import {HogwartsHouse} from "../../../../../wtc-mock-data/harry-potter/hogwartsHouse";

@Component({
  selector: 'app-hogwarts-details',
  templateUrl: './hogwarts-details.component.html',
  styleUrls: ['./hogwarts-details.component.css']
})
export class HogwartsDetailsComponent implements OnInit {

  hogwartsHouse: HogwartsHouse;

  constructor(private activatedRoute: ActivatedRoute,
              private hpData: HarryPotterDataService) { }

  ngOnInit() {
    const houseName = this.activatedRoute.snapshot.params['hogwartsHouseName']; // 'hogwartsHouseName' from routing.module.ts

    this.loadHogwartsHouseDetails(houseName);
  }

  private loadHogwartsHouseDetails(houseName: string) {
    this.hogwartsHouse = this.hpData.getHogwartsHouse(houseName);
  }

  public get username() {
    return this.activatedRoute.snapshot.queryParams['username']; // 'username' passed by NavigationExtras
  }
}

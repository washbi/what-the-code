import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, ParamMap, Router} from "@angular/router";
import {HarryPotterDataService} from "../../../../../wtc-mock-data/harry-potter/harry-potter-data.service";
import {PokemonDataService} from "../../../../../wtc-mock-data/pokemon/pokemon-data.service";
import {Pokemon} from "../../../../../wtc-mock-data/pokemon/pokemon";
import {HogwartsHouse} from "../../../../../wtc-mock-data/harry-potter/hogwartsHouse";

@Component({
  selector: 'app-route-choice-start',
  templateUrl: './route-choice-start.component.html',
  styleUrls: ['./route-choice-start.component.css']
})
export class RouteChoiceStartComponent implements OnInit {

  username = '';
  choiceOne = 'pokemon';
  choiceOneList: Pokemon[] = [];
  choiceTwo = 'harry-potter';
  choiceTwoList: HogwartsHouse[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private hpData: HarryPotterDataService,
              private pokemonData: PokemonDataService) { }

  ngOnInit() {
    // specified data
    this.choiceOneList = this.pokemonData.getStarterPokemon();
    this.choiceTwoList = this.hpData.getHogwartsHouses();
  }

  onChangeUsername (event) {
    this.username = event;
  }

  navigateToChoice(choice: string, itemId) {
    console.log(this.username);
    const navigationExtras: NavigationExtras = {
      queryParams: { "username": this.username },
      relativeTo: this.activatedRoute
    };
    // this.router.navigate([`opl/record/${record._id}`], this.navigationExtras);

    switch (choice) {
      case this.choiceOne:
        this.router.navigate([`../route-choice-one/${itemId}`], navigationExtras);
        break;
      case this.choiceTwo:
        this.router.navigate([`../route-choice-two/${itemId}`], navigationExtras);
        break;
    }
  }
}

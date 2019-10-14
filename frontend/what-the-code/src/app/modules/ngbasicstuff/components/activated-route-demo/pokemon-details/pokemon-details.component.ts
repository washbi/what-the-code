import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonDataService} from "../../../../../wtc-mock-data/pokemon/pokemon-data.service";
import {Pokemon} from "../../../../../wtc-mock-data/pokemon/pokemon";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private activatedRoute: ActivatedRoute,
              private pokemonData: PokemonDataService) { }

  ngOnInit() {
    const pokemonId = this.activatedRoute.snapshot.params['pokemonId']; // 'pokemonId' from routing.module.ts

    this.loadPokemon(pokemonId);
  }

  private loadPokemon(id: number) {
    this.pokemon = this.pokemonData.getPokemon(id);
  }

  public get username() {
    return this.activatedRoute.snapshot.queryParams['username']; // 'username' passed by NavigationExtras
  }
}

import {Injectable} from "@angular/core";
import {Pokemon} from "./pokemon";

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {

  private starterPokemon: Pokemon[] = [
    { id: 0, name: 'Bisasam', type: 'Gras', imageUrl: 'https://figuya.com/uploads/product/profile_picture/8737/profile_Bisasam_-_Rankenhieb_-_Pokemon_Waza_Gummi-Anh%C3%A4nger_vorschau.jpg'},
    { id: 1, name: 'Schiggy', type: 'Wasser', imageUrl: 'https://figuya.com/uploads/image/file/38878/full_Schiggy_-_Blubber_-_Pokemon_Waza_Gummi-Anh%C3%A4nger.jpg'},
    { id: 2, name: 'Glumanda', type: 'Feuer', imageUrl: 'https://figuya.com/uploads/product/profile_picture/8738/profile_Glumanda_-_Glut_-_Pokemon_Waza_Gummi-Anh%C3%A4nger_vorschau.jpg'},
    { id: 3, name: 'Pikachu', type: 'Elektro', imageUrl: 'https://figuya.com/uploads/product/profile_picture/8736/profile_Pikachu_-_Donnerblitz_-_Pokemon_Waza_Gummi-Anh%C3%A4nger_vorschau.jpg'},
  ];

  public getStarterPokemon(): Pokemon[] {
    return this.starterPokemon;
  }

  public getPokemon(id: number): Pokemon {
    return this.starterPokemon.find(pkmn => pkmn.id == id);
  }
}

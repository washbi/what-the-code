import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {PokemonDataService} from "../../../wtc-mock-data/pokemon/pokemon-data.service";
import {catchError, map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class StarterPokemonValidatorDirective implements AsyncValidator {

  constructor(private pokemonData: PokemonDataService) {

  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    const input = control.value;

    if (input === null || input === '') {
      return of(null);
    }

    return this.pokemonData.findStarterPokemon(control.value).pipe(
      map(pokemon => {
        if (pokemon) {
          return null;
        } else {
          return {
            noPokemon: true
          }
        }
      }),
      catchError(() => null) // error handling
    );
  }

}

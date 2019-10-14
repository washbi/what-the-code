import {Injectable} from "@angular/core";
import {HogwartsHouse} from "./hogwartsHouse";

@Injectable({
  providedIn: 'root',
})
export class HarryPotterDataService {

  private hogwartsHouses: HogwartsHouse[] = [
    { houseName: 'Gryffindor', founder: 'Godric Gryffindor', animal: 'Lion', trait: 'brave', headTeacher: 'Minerva McGonagall', imageUrl:'https://images.fun.com/products/48788/1-1/harry-potter-gryffindor-crest-rustic-sign.jpg'},
    { houseName: 'Hufflepuff', founder: 'Helga Hufflepuff', animal: 'Badger', trait: 'loyal', headTeacher: 'Pomona Sprout', imageUrl: 'https://images.fun.com/products/48789/1-1/harry-potter-hufflepuff-crest-rustic-sign.jpg'},
    { houseName: 'Ravenclaw', founder: 'Rowena Ravenclaw', animal: 'Eagle', trait: 'wise', headTeacher: 'Filius Flitwick', imageUrl: 'https://images.fun.com/products/48791/1-2/harry-potter-ravenclaw-crest-rustic-sign.jpg'},
    { houseName: 'Slytherin', founder: 'Salazar Slytherin', animal: 'Snake', trait: 'cunning', headTeacher: 'Severus Snape', imageUrl: 'https://images.fun.com/products/48790/1-2/harry-potter-slytherin-crest-rustic-sign.jpg'}
  ];

  public getHogwartsHouses(): HogwartsHouse[] {
    return this.hogwartsHouses;
  }

  public getHogwartsHouse(houseName: string): HogwartsHouse {
    return this.hogwartsHouses.find(house => house.houseName === houseName);
  }

}

import {Injectable} from "@angular/core";
import {TecType} from "./tec-type";
import {Technology} from "./technology";

@Injectable({
  providedIn: 'root',
})
export class TechnologiesDataService {

  private tecTypes: TecType[] = [
    { id: 0, position: 2, name: 'Frontend'},
    { id: 1, position: 3, name: 'Backend'},
    { id: 5, position: 4, name: 'Database'},
    { id: 2, position: 5, name: 'Security'},
    { id: 3, position: 6, name: 'Management'},
    { id: 4, position: 7, name: 'Development'},
    { id: 6, position: 1, name: 'Your Techstack'}
  ];

  private technologies: Technology[] = [
    { id: 0, position: 1, type: this.tecTypes[0], name: 'Angular', description: 'Framework with Typescript'},
    { id: 1, position: 2, type: this.tecTypes[0], name: 'Vue', description: 'Framework'},
    { id: 2, position: 3, type: this.tecTypes[0], name: 'React JS', description: 'Framework'},
    { id: 3, position: 4, type: this.tecTypes[0], name: 'Angular Material', description: 'Framework for Styles and Animations working with Angular'},
    { id: 4, position: 1, type: this.tecTypes[1], name: 'Spring Boot', description: 'Framework '},
    { id: 5, position: 2, type: this.tecTypes[1], name: 'Spring MVC', description: 'Framework '},
    { id: 6, position: 3, type: this.tecTypes[1], name: 'Laravel', description: 'PHP Framework '},
    { id: 7, position: 1, type: this.tecTypes[2], name: 'MySQL', description: ''},
    { id: 8, position: 4, type: this.tecTypes[2], name: 'PostgreSQL', description: ''},
    { id: 9, position: 2, type: this.tecTypes[2], name: 'Firebase', description: 'Use it with Android/iOS'},
    { id: 10, position: 3, type: this.tecTypes[2], name: 'PouchDB', description: 'indexed db local on the browser'},
    { id: 11, position: 4, type: this.tecTypes[2], name: 'MongoDB', description: 'NoSQL database'},
    { id: 12, position: 1, type: this.tecTypes[4], name: 'Trello', description: ''},
    { id: 13, position: 2, type: this.tecTypes[4], name: 'Confluence', description: ''},
    { id: 14, position: 3, type: this.tecTypes[4], name: 'RedHat', description: 'open source'},
    { id: 15, position: 4, type: this.tecTypes[4], name: 'Git Issues', description: ''},
    { id: 16, position: 1, type: this.tecTypes[5], name: 'IntelliJ', description: ''},
    { id: 17, position: 2, type: this.tecTypes[5], name: 'NetBeans', description: ''},
    { id: 18, position: 3, type: this.tecTypes[5], name: 'Eclipse', description: ''},
    { id: 19, position: 1, type: this.tecTypes[3], name: 'Spring Security', description: ''},
  ];

  public getTecTypes(): TecType[] {
    return this.tecTypes;
  }

  public getTechnologies(): Technology[] {
    return this.technologies;
  }
}

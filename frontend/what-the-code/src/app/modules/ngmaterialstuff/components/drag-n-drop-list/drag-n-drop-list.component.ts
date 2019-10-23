import { Component, OnInit } from '@angular/core';
import {Technology} from "../../../../wtc-mock-data/technologies/technology";
import {TechnologiesDataService} from "../../../../wtc-mock-data/technologies/technologies-data.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import {TecType} from "../../../../wtc-mock-data/technologies/tec-type";

@Component({
  selector: 'app-drag-n-drop-list',
  templateUrl: './drag-n-drop-list.component.html',
  styleUrls: ['./drag-n-drop-list.component.css']
})
export class DragNDropListComponent implements OnInit {

  items: Technology[];
  itemTypes: TecType[];
  itemsMap: Map<number, Technology[]> = new Map();

  constructor(private technologiesService: TechnologiesDataService) { }

  ngOnInit() {
    this.itemTypes = this.technologiesService.getTecTypes();
    this.items = this.technologiesService.getTechnologies();
    this.itemTypes.forEach(type => {
      let list = this.filterItemsByType(type);
      list = this.sortItemsByPosition(list);
      this.itemsMap.set(type.position, list);
    });
  }

  private filterItemsByType(type: TecType): Technology[] {
    return this.items.filter((value, index) => value.type.id === type.id);
  }

  private sortItemsByPosition(list: Technology[]): Technology[] {
    return list.sort((a,b) => (a.position > b.position ? 1: -1));
  }

  public getTypeName(position: number): string {
    return this.itemTypes.find(type => type.position === position).name;
  }
  
  drop(event: CdkDragDrop<Technology[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

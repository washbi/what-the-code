import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TestThing} from "../../models/test-thing.model";
import {Store} from "@ngrx/store";
import {PlaygroundState} from "../../playground.state";
import * as TestThingActions from './../../actions/test-thing.actions';

@Component({
  selector: 'app-read-test',
  templateUrl: './read-test.component.html'
})
export class ReadTestComponent implements OnInit {

  testThings: Observable<TestThing[]>;

  constructor(private store: Store<PlaygroundState>) {
    this.testThings = store.select('testThingStore');
  }

  ngOnInit() {

  }

  removeTestThing(testThing: TestThing) {
    this.store.dispatch(new TestThingActions.RemoveTestThing(testThing));
  }
}

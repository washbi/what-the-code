import { Component, OnInit } from '@angular/core';
import * as TestThingActions from './../../actions/test-thing.actions';
import {PlaygroundState} from "../../playground.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html'
})
export class CreateTestComponent implements OnInit {

  constructor(private store: Store<PlaygroundState>) { }

  ngOnInit() {
  }

  addTestThing(name) {
    this.store.dispatch(new TestThingActions.AddTestThing({name}));
  }

}

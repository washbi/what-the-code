import {Action} from "@ngrx/store";
import {TestThing} from "../models/test-thing.model";

export const ADD_TEST_THING = '[TEST_THING] Add';
export const REMOVE_TEST_THING = '[TEST_THING] Remove';

export class AddTestThing implements Action {
  readonly type = ADD_TEST_THING;

  constructor(public payload: TestThing) {  }
}

export class RemoveTestThing implements Action{
  readonly type = REMOVE_TEST_THING;

  constructor(public payload: TestThing) {  }
}

export type Actions = AddTestThing | RemoveTestThing;

import {TestThing} from "../models/test-thing.model";
import * as TestThingActions from "./../actions/test-thing.actions"

const initialState: TestThing = { name: 'Test Things Bums'};

export function reducer(state: TestThing[] = [initialState],
                        action: TestThingActions.Actions) {
  switch (action.type) {
    case TestThingActions.ADD_TEST_THING:
      return [...state, action.payload];
    case TestThingActions.REMOVE_TEST_THING:
      return state.filter(thing => thing!= action.payload);
    default:
      return state;
  }
}

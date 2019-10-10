import {TestThing} from "./models/test-thing.model";

export interface PlaygroundState {
  readonly testThing: TestThing[];
}

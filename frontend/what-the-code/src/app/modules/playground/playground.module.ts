import {NgModule} from "@angular/core";
import {PlaygroundComponent} from "./playground.component";
import {PlaygroundRoutingModule} from "./playground-routing.module";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/test-thing.reducer";
import { CreateTestComponent } from './components/create-test/create-test.component';
import { ReadTestComponent } from './components/read-test/read-test.component';
import {SharedModule} from "../../shared-modules/shared.module";

@NgModule({
  declarations: [
    PlaygroundComponent,
    CreateTestComponent,
    ReadTestComponent,
  ],
  imports: [
    SharedModule,
    PlaygroundRoutingModule,
    StoreModule.forRoot({testThingStore: reducer}),
  ],
  exports: [
  ]
})
export class PlaygroundModule { }

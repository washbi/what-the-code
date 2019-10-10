import {NgModule} from "@angular/core";
import {PlaygroundComponent} from "./playground.component";
import {BrowserModule} from "@angular/platform-browser";
import {PlaygroundRoutingModule} from "./playground-routing.module";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./reducers/test-thing.reducer";
import { CreateTestComponent } from './components/create-test/create-test.component';
import { ReadTestComponent } from './components/read-test/read-test.component';

@NgModule({
  declarations: [
    PlaygroundComponent,
    CreateTestComponent,
    ReadTestComponent,
  ],
  imports: [
    BrowserModule,
    PlaygroundRoutingModule,
    StoreModule.forRoot({testThingStore: reducer}),
  ],
  exports: [
  ]
})
export class PlaygroundModule { }

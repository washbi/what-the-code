import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './modules/playground/playground.component';
import {PlaygroundModule} from "./modules/playground/playground.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaygroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

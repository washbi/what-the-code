import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlaygroundModule} from "./modules/playground/playground.module";
import {PouchdbModule} from "./modules/pouchdb/pouchdb.module";
import {CsshalfgodstuffModule} from "./modules/csshalfgodstuff/csshalfgodstuff.module";
import {NgbasicstuffModule} from "./modules/ngbasicstuff/ngbasicstuff.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaygroundModule,
    PouchdbModule,
    CsshalfgodstuffModule,
    NgbasicstuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PlaygroundModule} from "./modules/playground/playground.module";
import {PouchdbModule} from "./modules/pouchdb/pouchdb.module";
import {CsshalfgodstuffModule} from "./modules/csshalfgodstuff/csshalfgodstuff.module";
import {NgbasicstuffModule} from "./modules/ngbasicstuff/ngbasicstuff.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgmaterialstuffModule} from "./modules/ngmaterialstuff/ngmaterialstuff.module";
import {NgadvancedstuffModule} from "./modules/ngadvancedstuff/ngadvancedstuff.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // provides services that are essential to launch and run a browser app
    AppRoutingModule,
    BrowserAnimationsModule,
    PlaygroundModule,
    PouchdbModule,
    CsshalfgodstuffModule,
    NgbasicstuffModule,
    NgmaterialstuffModule,
    NgadvancedstuffModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbAccordionConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyNoteComponent } from './my-note/my-note.component';


@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    MyHeaderComponent,
    MyNoteComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NgbAccordionConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

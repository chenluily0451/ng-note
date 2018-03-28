import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbAccordionConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from '../components/layout/app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyMenuComponent } from '../components/my-menu/my-menu.component';
import { MyHeaderComponent } from '../components/my-header/my-header.component';
import { MyNoteComponent } from '../components/my-note/my-note.component';


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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbAccordionConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElModule } from 'element-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from '../components/layout/app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyMenuComponent } from '../components/my-menu/my-menu.component';
import { MyHeaderComponent } from '../components/my-header/my-header.component';
import { MyNoteComponent } from '../components/my-note/my-note.component';
import { MyWelcomeComponent } from '../components/my-welcome/my-welcome.component';
import { MyDataListComponent } from '../components/my-dataList/my-dataList.component';

import {DataManageService} from '../service/dataManage.service';



@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    MyHeaderComponent,
    MyNoteComponent,
    MyWelcomeComponent,
    MyDataListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ElModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    NgbAccordionConfig,
    DataManageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

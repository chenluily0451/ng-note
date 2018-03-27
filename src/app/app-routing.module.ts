import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyNoteComponent} from './my-note/my-note.component';


const routes: Routes = [
  {path: 'mynote', component: MyNoteComponent},
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {}

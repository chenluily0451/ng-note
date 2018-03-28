import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNoteComponent } from '../components/my-note/my-note.component';
import { MyWelcomeComponent } from '../components/my-welcome/my-welcome.component';


const routes: Routes = [
  {path: '', component: MyWelcomeComponent},
  {path: 'mynote', component: MyNoteComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {}

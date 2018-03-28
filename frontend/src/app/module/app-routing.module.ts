import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNoteComponent } from '../components/my-note/my-note.component';
import { MyWelcomeComponent } from '../components/my-welcome/my-welcome.component';
import { MyDataListComponent } from '../components/my-dataList/my-dataList.component';


const routes: Routes = [
  {path: '', component: MyWelcomeComponent},
  {path: 'mynote', component: MyNoteComponent},
  {path: 'datalist', component: MyDataListComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {}

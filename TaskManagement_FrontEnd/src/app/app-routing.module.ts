import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { SmartComponentsComponent } from './smart-components/smart-components.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes: Routes = [
  {
    path: 'home',
    component: SmartComponentsComponent
  },
  {
    path: 'view',
    component: ViewTaskComponent
  },
  {
    path: 'list',
    component: ListTaskComponent
  },
  {
    path: 'editTask/:id',
    component: EditTaskComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

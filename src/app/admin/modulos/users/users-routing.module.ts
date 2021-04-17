import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'create', component: UserCreateComponent
  },
  {
    path: 'edit/:id', component: UserEditComponent
  },
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

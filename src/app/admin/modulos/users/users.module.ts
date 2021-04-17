import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  declarations: [UserComponent, UserCreateComponent, UserEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class UsersModule { }

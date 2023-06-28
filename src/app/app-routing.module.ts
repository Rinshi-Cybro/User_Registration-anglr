import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { HomeComponent } from './home/home.component';
import { UserUpdateComponent } from './user-update/user-update.component';



const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent
  },

  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"showuser",
    component:ShowuserComponent
  },

  {
    path:"updateUser/:id",
    component:UserUpdateComponent
  },

  {
    path:"",
    component:HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

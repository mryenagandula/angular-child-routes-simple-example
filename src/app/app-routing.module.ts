import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'users',
  },
  {
    path:'users',
    component:UsersListComponent,
    children: [
      {
        path: '',
        component: UserDetailsComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

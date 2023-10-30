import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RoleSelectComponent } from './role-select/role-select.component';

const routes: Routes = [


  { path: '', redirectTo: '/roleSelect', pathMatch: 'full' }, // Redirect to login
  { path: 'roleSelect', component: RoleSelectComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'user', component: UserComponent},
  // Add a wildcard route for all other requests
  { path: '**', redirectTo: '/roleSelect' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

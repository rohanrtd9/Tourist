import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RoleSelectComponent } from './role-select/role-select.component';
import { AvailableExamsComponent } from './available-exams/available-exams.component';

import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { AllExamComponent } from './all-exam/all-exam.component';
import { AdminCreateExamComponent } from './admin-create-exam/admin-create-exam.component';

const routes: Routes = [


  { path: '', redirectTo: '/roleSelect', pathMatch: 'full' }, // Redirect to login
  { path: 'roleSelect', component: RoleSelectComponent },
  { path: 'admin', component: AdminComponent,
      children: [
        { path: 'create', component: AdminCreateExamComponent },
        { path: 'all', component: AllExamComponent },
      ]
  },
  { path: 'user', 
      component: SidebarUserComponent,
      children: [
        { path: 'available', component: AvailableExamsComponent },
        { path: 'all', component: AllExamComponent },
      ]},
  { path: 'availExam', component: AvailableExamsComponent},
  // Add a wildcard route for all other requests
  { path: '**', redirectTo: '/roleSelect' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

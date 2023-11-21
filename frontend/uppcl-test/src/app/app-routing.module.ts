import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RoleSelectComponent } from './role-select/role-select.component';
import { AvailableExamsComponent } from './available-exams/available-exams.component';

import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { AllExamComponent } from './all-exam/all-exam.component';
import { AdminCreateExamComponent } from './admin-create-exam/admin-create-exam.component';
import { AdminModifyExamComponent } from './admin-modify-exam/admin-modify-exam.component';
import { AdminExamResultComponent } from './admin-exam-result/admin-exam-result.component';
import { ExamLiveComponent } from './exam-live/exam-live.component';
import { ExamInstructionsComponent } from './exam-instructions/exam-instructions.component';
import { ExamNavbarComponent } from './exam-navbar/exam-navbar.component';
import { ExamAlreadyAttemptedComponent } from './exam-already-attempted/exam-already-attempted.component';

const routes: Routes = [


  { path: '', redirectTo: '/roleSelect', pathMatch: 'full' }, // Redirect to login
  { path: 'roleSelect', component: RoleSelectComponent },
  { path: 'admin', component: AdminComponent,
      children: [
        { path: 'create', component: AdminCreateExamComponent },
        { path: 'modify', component: AdminModifyExamComponent },
        { path: 'result', component: AdminExamResultComponent },
      ]
  },
  { path: 'user', 
      component: SidebarUserComponent,
      children: [
        { path: 'available', component: AvailableExamsComponent },
        { path: 'all', component: AllExamComponent },
      ]},
      { path: 'exam', 
      component: ExamNavbarComponent,
      children: [
        { path: 'instructions', component: ExamInstructionsComponent },
        { path: 'live', component: ExamLiveComponent },
        { path: 'attempted', component: ExamAlreadyAttemptedComponent }
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

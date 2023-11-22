import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RoleSelectComponent } from './role-select/role-select.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { AvailableExamsComponent } from './available-exams/available-exams.component';
import { AllExamComponent } from './all-exam/all-exam.component';
import { AdminCreateExamComponent } from './admin-create-exam/admin-create-exam.component';
import { AdminViewResultsComponent } from './admin-view-results/admin-view-results.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../src/environment/environment';
import { AdminModifyExamComponent } from './admin-modify-exam/admin-modify-exam.component';
import { AdminExamResultComponent } from './admin-exam-result/admin-exam-result.component';
import { ExamLiveComponent } from './exam-live/exam-live.component';
import { ExamInstructionsComponent } from './exam-instructions/exam-instructions.component';
import { ExamNavbarComponent } from './exam-navbar/exam-navbar.component';
import { ExamAlreadyAttemptedComponent } from './exam-already-attempted/exam-already-attempted.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    NavbarComponent,
    RoleSelectComponent,
    SidebarUserComponent,
    AvailableExamsComponent,
    AllExamComponent,
    AdminCreateExamComponent,
    AdminViewResultsComponent,
    AdminModifyExamComponent,
    AdminExamResultComponent,
    ExamLiveComponent,
    ExamInstructionsComponent,
    ExamNavbarComponent,
    ExamAlreadyAttemptedComponent,
    AdminAuthComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

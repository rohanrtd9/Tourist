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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

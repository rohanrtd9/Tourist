import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  password: string = '';
  constructor(private router: Router) {}
  validatePassword() {
    // Add your password validation logic here
    if (this.password === "Admin@1239") {
        this.router.navigate(['../admin/modify']);
    } else {
        // Show an alert for an invalid password
        alert("Invalid password. Please try again.");
    }
}
}

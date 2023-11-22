import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.css']
})
export class RoleSelectComponent {
  userData: any; // JSON data from local storage
  selectedRole: string = ''; 
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch the JSON data from local storage
    this.userData = [{"role":"Examinee","description":"Give Exam"},{"role":"Admin","description":"Create Exam"}];
    console.log(this.userData)
  }
 
  roleSelect(role:any)
  {
    if (role == "Admin") {
      // Route to admin component
      // Replace 'admin-route' with your actual route for the admin component
      this.router.navigate(['../auth']);
    } else {
      // Route to user component
      // Replace 'user-route' with your actual route for the user component
      this.router.navigate(['../details']);
    }
  }
}

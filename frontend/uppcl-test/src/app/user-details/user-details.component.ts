import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user = {
    username: '',
    designation: '',
    sapid: '',
    phoneNumber: '',
    zone:'',
    circle:'',
    division:'',
  };

  constructor(private router: Router) {}

  enterExam() {
    // Validate phone number and SAP ID
    if (this.isPhoneNumberValid() && this.isSapIdValid()) {
      localStorage.setItem('userDetails',  JSON.stringify(this.user));
      // Redirect to /examStart if all fields are filled and validation passes
      this.router.navigate(['/user/available']);
    } else {
      // Handle validation errors, e.g., display an error message
      console.error('Validation failed. Please check the phone number and SAP ID.');
    }
  }

  isPhoneNumberValid(): boolean {
    // Validate phone number (10 digits)
    return /^\d{10}$/.test(this.user.phoneNumber);
  }

  isSapIdValid(): boolean {
    // Validate SAP ID (7-8 digits)
    return /^\d{7,8}$/.test(this.user.sapid);
  }
}

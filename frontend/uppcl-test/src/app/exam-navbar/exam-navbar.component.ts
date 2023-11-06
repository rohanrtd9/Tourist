import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-navbar',
  templateUrl: './exam-navbar.component.html',
  styleUrls: ['./exam-navbar.component.css']
})
export class ExamNavbarComponent {
  examData: any | undefined;
  constructor() {
   
    const storedObject = localStorage.getItem('examData');
    if (storedObject) {
      this.examData = JSON.parse(storedObject);
      console.log(this.examData); // Use the retrievedObject as needed in your application
    }
  }
}

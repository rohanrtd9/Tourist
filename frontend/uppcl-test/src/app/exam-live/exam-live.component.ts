import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-live',
  templateUrl: './exam-live.component.html',
  styleUrls: ['./exam-live.component.css']
})
export class ExamLiveComponent {
  examData: any | undefined;
  ngOnInit(): void {}
 
  constructor() {
   
    const storedObject = localStorage.getItem('examData');
    if (storedObject) {
      this.examData = JSON.parse(storedObject);
      console.log(this.examData); // Use the retrievedObject as needed in your application
      
    }
  }
}

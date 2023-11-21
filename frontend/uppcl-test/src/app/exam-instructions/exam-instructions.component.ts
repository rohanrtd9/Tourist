import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamAttemptService } from '../exam-attempt.service';
import { CountdownTimerService } from '../exam-countdown.service';


@Component({
  selector: 'app-exam-instructions',
  templateUrl: './exam-instructions.component.html',
  styleUrls: ['./exam-instructions.component.css']
})
export class ExamInstructionsComponent {
  examData: any;
  constructor(private attempt:ExamAttemptService,private router: Router,
    private countdownTimerService: CountdownTimerService,){
    this.examData = localStorage.getItem('examData');
    console.log(this.examData)
  }
  ngOnInit()
  {
    //this.sharedData = this.examDataService.getData();
    const storedObject = localStorage.getItem('examData');
    if (storedObject) {
      this.examData = JSON.parse(storedObject);
      console.log(this.examData); // Use the retrievedObject as needed in your application
    }
    console.log(this.examData)
  }
  startExam() {
    
    if (window.confirm("Do you want to start the exam?")) {
      
      this.router.navigate(['/exam/live']);
    }
  }
  cancelExam()
  {
    if (window.confirm("Do you want to cancel starting the exam?")) {
      localStorage.removeItem('examData');
      this.router.navigate(['/user/available']);
    }
  }
}

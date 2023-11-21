import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FirebaseService } from '../firebase.service';
import { ExamAttemptService } from '../exam-attempt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-navbar',
  templateUrl: './exam-navbar.component.html',
  styleUrls: ['./exam-navbar.component.css']
})
export class ExamNavbarComponent {
  examData: any | undefined;
  itemsSubscription: Subscription | undefined;
  examAttemptData: any;
  constructor(private attempExams: ExamAttemptService,private router: Router) {
   
    const storedObject = localStorage.getItem('examData');
    if (storedObject) {
      this.examData = JSON.parse(storedObject);
      console.log(this.examData); // Use the retrievedObject as needed in your application
      this.itemsSubscription = this.attempExams.getItemBySapIdExamId("11003978",this.examData.id).subscribe((data) => {
        this.examAttemptData = data; // Assuming your data is an array, modify this as per your data structure
        console.log(this.examAttemptData)
        if(this.examAttemptData.length ==0)
        {
          this.router.navigate(['/exam/instructions'])
        }
        else
        {
          this.router.navigate(['/exam/attempted'])
        }
      });
      
    }
  }
}

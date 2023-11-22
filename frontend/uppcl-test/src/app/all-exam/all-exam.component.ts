import { Component } from '@angular/core';
import { ExamAttemptService } from '../exam-attempt.service';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-all-exam',
  templateUrl: './all-exam.component.html',
  styleUrls: ['./all-exam.component.css']
})
export class AllExamComponent {
  examAttemptData: any; 
  userDetails:any;
  itemsSubscription: Subscription | undefined;
  constructor(private attempt:ExamAttemptService)
  {
    const storedObject = localStorage.getItem('userDetails');
    if (storedObject) {
    this.userDetails=JSON.parse(storedObject);
    console.log(this.userDetails)
    }
    
    this.itemsSubscription = this.attempt.getItemBySapId(this.userDetails.sapid).subscribe((data) => {
      this.examAttemptData = data; // Assuming your data is an array, modify this as per your data structure
      
    });
  }
}

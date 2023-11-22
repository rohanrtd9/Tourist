import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import arrayShuffle from 'array-shuffle';

@Component({
  selector: 'app-available-exams',
  templateUrl: './available-exams.component.html',
  styleUrls: ['./available-exams.component.css']
})
export class AvailableExamsComponent {
  itemsSubscription: Subscription | undefined;
  examsData: any;
  userDetails:any;
  
  constructor(private firebaseService: FirebaseService,private router: Router) 
  {
    const storedObject = localStorage.getItem('userDetails');
    if (storedObject) {
      this.userDetails = JSON.parse(storedObject);
    }
  }
  ngOnInit(){
    this.itemsSubscription = this.firebaseService.getItems().subscribe((data) => {
      this.examsData = data; // Assuming your data is an array, modify this as per your data structure

    });
  }
  startExam(exam:any) {
    console.log(exam)
    if (window.confirm("Do you want to start the exam?")) {
      localStorage.setItem('examData',  JSON.stringify(exam));
      localStorage.setItem('questionOrder',  JSON.stringify(arrayShuffle([0 ,1, 2, 3, 4, 5, 6, 7, 8, 9])));
      localStorage.setItem('answerOrder',  JSON.stringify(arrayShuffle([0 ,1, 2, 3])));
      

        this.router.navigate(['/exam']);
    }
}
}

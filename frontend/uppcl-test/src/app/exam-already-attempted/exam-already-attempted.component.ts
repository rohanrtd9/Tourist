import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-already-attempted',
  templateUrl: './exam-already-attempted.component.html',
  styleUrls: ['./exam-already-attempted.component.css']
})
export class ExamAlreadyAttemptedComponent {
  examAttemptData: any; // Adjust the type based on your data structure

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the data from the queryParams
    this.route.queryParams.subscribe(params => {
      this.examAttemptData = JSON.parse(params['data']);
      // Now you can use this.examAttemptData in your component
    });
    console.log(this.examAttemptData)
  }
}

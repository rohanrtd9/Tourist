import { Component } from '@angular/core';

@Component({
  selector: 'app-all-exam',
  templateUrl: './all-exam.component.html',
  styleUrls: ['./all-exam.component.css']
})
export class AllExamComponent {
  attemptedExams = [
    {
      attemptDate: '2023-11-10',
      marks: 100,
      marksObtained: 80,
    },
    {
      attemptDate: '2023-11-12',
      marks: 100,
      marksObtained: 90,
    },
    {
      attemptDate: '2023-11-13',
      marks: 90,
      marksObtained: 70,
    },
    // Add more available exam data
  ];
}

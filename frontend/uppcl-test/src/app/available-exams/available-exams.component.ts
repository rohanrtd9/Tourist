import { Component } from '@angular/core';

@Component({
  selector: 'app-available-exams',
  templateUrl: './available-exams.component.html',
  styleUrls: ['./available-exams.component.css']
})
export class AvailableExamsComponent {
  availableExams = [
    {
      examDate: '2023-11-10',
      marks: 100,
      startDate: '2023-11-01',
      endDate: '2023-11-09'
    },
    {
      examDate: '2023-11-12',
      marks: 100,
      startDate: '2023-11-01',
      endDate: '2023-11-09'
    },
    {
      examDate: '2023-11-13',
      marks: 90,
      startDate: '2023-11-01',
      endDate: '2023-11-09'
    },
    // Add more available exam data
  ];
  startExam() {
    if (window.confirm("Do you want to start the exam?")) {
        window.location.href = '/exam/instructions';
    }
}
}

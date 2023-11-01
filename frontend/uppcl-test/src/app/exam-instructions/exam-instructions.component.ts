import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-instructions',
  templateUrl: './exam-instructions.component.html',
  styleUrls: ['./exam-instructions.component.css']
})
export class ExamInstructionsComponent {
  startExam() {
    if (window.confirm("Do you want to start the exam?")) {
        window.location.href = '/exam/live';
    }
  }
}

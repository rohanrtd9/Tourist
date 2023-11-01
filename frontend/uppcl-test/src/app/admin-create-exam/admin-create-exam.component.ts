import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
export class Exam {
  examName: string="";
  startDate: Date=new Date();
  endDate: Date=new Date();
  duration: string="";
  marksPerQuestion: number=10;
  jsonFile: File | null = null;
  questions:any="";
  toPlainObject() {
    return {
      examName: this.examName,
      startDate: this.startDate,
      endDate: this.endDate,
      duration: this.duration,
      questions: this.questions,
      marksPerQuestion: this.marksPerQuestion,
      
      // handle file accordingly, you might want to convert it to a string or handle it as per your requirements
    }
  }
  
}
@Component({
  selector: 'app-admin-create-exam',
  templateUrl: './admin-create-exam.component.html',
  styleUrls: ['./admin-create-exam.component.css']
})

export class AdminCreateExamComponent {
  constructor(private firebaseService: FirebaseService) {}
  exam: Exam = new Exam();
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const fileContent: string = e.target.result;
        try {
          const jsonData = JSON.parse(fileContent);
          console.log(jsonData); // Use the JSON data as needed
          this.exam.questions=jsonData
        } catch (ex) {
          console.log('Error parsing JSON file', ex);
        }
      };
      reader.readAsText(file);
    }
  }
addExam()
{
  const examData = this.exam.toPlainObject();
  this.firebaseService.addItem(examData)
  console.log(this.exam)}
}

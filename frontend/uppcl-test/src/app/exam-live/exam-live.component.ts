import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-live',
  templateUrl: './exam-live.component.html',
  styleUrls: ['./exam-live.component.css']
})
export class ExamLiveComponent {
  examData: any;
// JSON data provided

  currentQuestionIndex: number = 0;
  questionOrder: number[] = []; // Get the question order from local storage
  answerOrder: number[] = []; // Get the answer order from local storage
  quizData:any;
  currentQuestion: any = {};
  currentAnswers:any = {};
  constructor() {
   
    const storedObject = localStorage.getItem('examData');
    if (storedObject) {
      this.examData = JSON.parse(storedObject);
      this.quizData=this.examData.questions;
      //console.log(this.examData); // Use the retrievedObject as needed in your application
      const storedObject1 = localStorage.getItem('questionOrder');
      if (storedObject1) {
        this.questionOrder = JSON.parse(storedObject1);
        this.quizData=this.examData.questions;
        this.currentQuestion = this.quizData[this.questionOrder[this.currentQuestionIndex]].question;
        this.currentAnswers = this.quizData[this.questionOrder[this.currentQuestionIndex]].answers;
        // Use the retrievedObject as needed in your application
      }
      
    }
    const storedObject2 = localStorage.getItem('answerOrder');
    if (storedObject2) {
      this.answerOrder = JSON.parse(storedObject2);
      console.log(this.answerOrder); 
    }
    
  }
  ngOnInit(): void {  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if(this.currentQuestionIndex>=this.quizData.length)
      this.currentQuestionIndex=0;
    this.currentQuestion = this.quizData[this.questionOrder[this.currentQuestionIndex]].question;
    this.currentAnswers = this.quizData[this.questionOrder[this.currentQuestionIndex]].answers;
      console.log(this.currentAnswers);
  }

  previousQuestion(): void {
    this.currentQuestionIndex--;
    if(this.currentQuestionIndex<0)
      this.currentQuestionIndex=this.quizData.length-1;
    this.currentQuestion = this.quizData[this.questionOrder[this.currentQuestionIndex]].question;
    this.currentAnswers = this.quizData[this.questionOrder[this.currentQuestionIndex]].answers;
    console.log(this.currentAnswers);
  }

  saveAnswer(answerId: number): void {
    this.answerOrder[this.currentQuestionIndex] = answerId; // Save the answer order in local storage
  }
}

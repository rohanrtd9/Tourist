import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExamAttemptService } from '../exam-attempt.service';
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
  userExamAttemptVar = {
    username: '',
    designation: '',
    sapid: '',
    phoneNumber: '',
    zone:'',
    circle:'',
    division:'',
    examData:'',


  };


  constructor(private attempt:ExamAttemptService) {

    const storedObjectX = localStorage.getItem('userExamAttempt');
    if (storedObjectX) {
      const parsedData=JSON.parse(storedObjectX)
      this.examData = parsedData.examData;
      this.quizData=this.examData.questions;
    }
    else{
      
      const storedObject = localStorage.getItem('examData');
    if (storedObject) {
      this.examData = JSON.parse(storedObject);
      this.userExamAttemptVar.examData=this.examData;
      localStorage.setItem('userExamAttempt',  JSON.stringify(this.userExamAttemptVar));
      this.quizData=this.examData.questions;
      //console.log(this.examData); // Use the retrievedObject as needed in your application
    }
    }
    
    const storedObject1 = localStorage.getItem('questionOrder');
      if (storedObject1) {
        this.questionOrder = JSON.parse(storedObject1);
        this.onItemClicked(this.currentQuestionIndex);
      }
    const storedObject2 = localStorage.getItem('answerOrder');
    if (storedObject2) {
      this.answerOrder = JSON.parse(storedObject2);
    }
    
  }
  ngOnInit(): void {  }

  nextQuestion(): void {
    this.quizData[this.currentQuestionIndex].active = false;
    this.currentQuestionIndex++;
    if(this.currentQuestionIndex>=this.quizData.length)
      this.currentQuestionIndex=0;
    this.onItemClicked(this.currentQuestionIndex);
  }

  previousQuestion(): void {
    this.quizData[this.currentQuestionIndex].active = false;
    this.currentQuestionIndex--;
    if(this.currentQuestionIndex<0)
      this.currentQuestionIndex=this.quizData.length-1;
    this.onItemClicked(this.currentQuestionIndex);
  }

  saveAnswer(answer: any,idx:number): void {
    this.quizData[this.currentQuestionIndex].answered = true;
    this.quizData[this.questionOrder[this.currentQuestionIndex]].answers.forEach((answer: { chosen: boolean; }) => answer.chosen = false);

    this.quizData[this.questionOrder[this.currentQuestionIndex]].answers[idx].chosen= true;
    this.quizData[this.questionOrder[this.currentQuestionIndex]].given_answer_id=answer
    console.log(this.examData)
    this.userExamAttemptVar.examData=this.examData;
      localStorage.setItem('userExamAttempt',  JSON.stringify(this.userExamAttemptVar));
     // Save the answer order in local storage
  }
  clearAnswer()
  {
    this.quizData[this.currentQuestionIndex].answered = false;
    this.quizData[this.questionOrder[this.currentQuestionIndex]].answers.forEach((answer: { chosen: boolean; }) => answer.chosen = false);
    this.quizData[this.questionOrder[this.currentQuestionIndex]].given_answer_id=null
    this.userExamAttemptVar.examData=this.examData;
      localStorage.setItem('userExamAttempt',  JSON.stringify(this.userExamAttemptVar));
  }
  onItemClicked(index: number) {
    
    this.quizData[this.currentQuestionIndex].active = false;
    this.currentQuestionIndex=index;
    this.quizData[index].active = true;
    this.quizData[index].visited = true;
    this.currentQuestion = this.quizData[this.questionOrder[index]].question;
    console.log(this.quizData[this.questionOrder[index]])
    this.currentAnswers = this.quizData[this.questionOrder[index]].answers; // Assuming the 'visited' property exists in each item of the quizData array
  }

}

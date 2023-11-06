import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin-modify-exam',
  templateUrl: './admin-modify-exam.component.html',
  styleUrls: ['./admin-modify-exam.component.css']
})
export class AdminModifyExamComponent {
  
  itemsSubscription: Subscription | undefined;
  examsData: any;
  isExamDetailModalOpen: boolean = false;
  examDetailContent: any;
  constructor(private firebaseService: FirebaseService) {}
  ngOnInit(){
    this.itemsSubscription = this.firebaseService.getItems().subscribe((data) => {
      this.examsData = data; // Assuming your data is an array, modify this as per your data structure

    });
  }
  showExamDetailModal(questions: any): void {
    this.isExamDetailModalOpen = true;
    this.examDetailContent = questions;
  }

  closeExamDetailModal(): void {
    this.isExamDetailModalOpen = false;
  }
  deleteExam(id:string)
  {
   
    this.firebaseService.deleteItem(id);
  }
}

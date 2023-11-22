import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,Query  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExamAttemptService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('exams_attempt');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getItems() {
    return this.items;
  }

   addItem(item: any) {
    this.itemsCollection.add(item);
  }

  updateItem(id: string, item: any) {
    this.itemsCollection.doc(id).update(item);
  }

  deleteItem(id: string) {
    this.itemsCollection.doc(id).delete();
  }
  getItemBySapIdExamId(sapId: string, examId: string): Observable<any[]> {
    // Assuming you have a collection named 'yourCollectionName' in your Firestore
    // Adjust this based on your Firestore structure

    // Create a reference to the collection
    const collectionRef = this.afs.collection('exams_attempt', ref =>
      ref.where('SapId', '==', sapId).where('AttemptedExamId', '==', examId)
    );

    // Retrieve the data as an Observable
    return collectionRef.valueChanges();
  }
  getItemBySapId(sapId: string): Observable<any[]> {
    // Assuming you have a collection named 'yourCollectionName' in your Firestore
    // Adjust this based on your Firestore structure

    // Create a reference to the collection
    const collectionRef = this.afs.collection('exams_attempt', ref =>
      ref.where('SapId', '==', sapId)
    );

    // Retrieve the data as an Observable
    return collectionRef.valueChanges();
  }
  
  
}

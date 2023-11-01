import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('exams');
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

  public addItem(item: any) {
    this.itemsCollection.add(item);
  }

  updateItem(id: string, item: any) {
    this.itemsCollection.doc(id).update(item);
  }

  deleteItem(id: string) {
    this.itemsCollection.doc(id).delete();
  }
}

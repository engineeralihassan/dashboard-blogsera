import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private firestore: Firestore) {

  }
  onSubmit(categoryForm: any) {
    let categoryData = {
      category: categoryForm.value.category,
    }
    console.log(categoryData);
    // jj
    let coll = collection(this.firestore, 'categories');
    addDoc(coll, categoryData).then((docRef) => {
      console.log("Data is saved successfully", docRef)
    }).catch((err) => {
      console.log("try again there is an error", err);
    });

  }
}

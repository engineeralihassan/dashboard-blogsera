import { Component } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  constructor(private firestore: Firestore) {

  }
  onsubmit(f: any) {

    let coll = collection(this.firestore, 'users');
    addDoc(coll, f.value).then(() => {
      console.log("Data is saved successfully")
    }).catch((err) => {
      console.log("try again there is an error", err);
    });

  }
  getData() {
    console.log('btn clicked')
    const collection1 = collection(this.firestore, 'users');
    collectionData(collection1).subscribe((data) => {
      console.log(data, "data is ");

    });

  }
}

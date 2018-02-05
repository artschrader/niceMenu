import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Block} from '../models/block';
import {Blockid} from '../models/blockid';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blocksCollection: AngularFirestoreCollection<Block>;
  blocks: Observable<Blockid[]>;

  constructor(private afs: AngularFirestore, public dialog: MatDialog) {}
























  
  ngOnInit() {
    this.blocksCollection = this.afs.collection('blocks');
    this.blocks = this.blocksCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Block;
        const id = a.payload.doc.id;
        return { id, ...data };
       }) ;
      }) ;
  }
  OpenDialog(id: string) {

  }

}

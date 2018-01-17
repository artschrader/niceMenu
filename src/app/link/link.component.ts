import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Link} from '../models/link';
import {Linkid} from '../models/linkid';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  linksCollection: AngularFirestoreCollection<Link>;
  links: Observable<Linkid[]>;

  @Input()
  currentBlockId: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.linksCollection = this.afs.collection('blocks').doc(this.currentBlockId).collection('links');
    this.links = this.linksCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Link;
        const id = a.payload.doc.id;
        return { id, ...data };
       }) ;
      }) ;
    }
}

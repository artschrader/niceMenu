import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Block } from '../models/block';
import { Blockid } from '../models/blockid';
import { Link } from '../models/link';
import { Linkid } from '../models/linkid';

@Injectable()
export class DbService {
  blocksCollection: AngularFirestoreCollection<Block>;
  blocks: Observable<Blockid[]>;
  linksCollection: AngularFirestoreCollection<Link>;
  links: Observable<Linkid[]>;

  constructor(private afs: AngularFirestore) { }

  getBlocks(): Observable<Blockid[]> {
    this.blocksCollection = this.afs.collection('blocks');
    this.blocks = this.blocksCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Block;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.blocks;
  }

  getLinks(currentBlockId: string): Observable<Linkid[]> {
    this.linksCollection = this.afs.collection('blocks').doc(currentBlockId).collection('links');
    this.links = this.linksCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Link;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.links;
  }
  addLink(blockId: string, data: Link) {
    console.log(data);
    this.afs.collection('blocks').doc(blockId).collection('links').add(data)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }
  deleteLink(blockId: string, linkId: string) {
    this.afs.collection('blocks').doc(blockId).collection('links').doc(linkId).delete()
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }
    updateLink(blockId: string, linkid: Linkid) {
    this.afs.collection('blocks').doc(blockId).collection('links').doc(linkid.id).update({'title' : linkid.title, 'url' : linkid.url })
      .then(function (docRef) {
        console.log('Document updated with ID: ', docRef);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }

}

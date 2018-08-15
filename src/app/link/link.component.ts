import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Link} from '../models/link';
import {Linkid} from '../models/linkid';
import { DbService } from '../services/db.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DeleteLinkComponent} from '../dialogs/delete-link/delete-link.component';
import {EditLinkComponent} from '../dialogs/edit-link/edit-link.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  links: Observable<Linkid[]>;
  private link: Link;

  @Input()
  currentBlockId: string;

  constructor(private db: DbService, public dialog: MatDialog) { }

  ngOnInit() {
    this.links = this.db.getLinks(this.currentBlockId);
    }

    editLink(blockId: string, linkid: Linkid){
      const dialogRef = this.dialog.open(EditLinkComponent);
      dialogRef.componentInstance.blockId = blockId;
      dialogRef.componentInstance.linkid = linkid;
      console.log(linkid);
    }
    deleteLink(blockId: string, linkId: string, title: string){
       const dialogRef = this.dialog.open(DeleteLinkComponent);
      dialogRef.componentInstance.blockId = blockId;
      dialogRef.componentInstance.linkId = linkId;
      dialogRef.componentInstance.title = title;
    }
}

import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-link',
  templateUrl: './delete-link.component.html',
  styleUrls: ['./delete-link.component.css']
})
export class DeleteLinkComponent implements OnInit {
public linkId: string;
public blockId: string;
public title: string;

  constructor(private db: DbService, public dialogRef: MatDialogRef<DeleteLinkComponent>) { }

  ngOnInit() {
  }
  deleteLink() {
    this.db.deleteLink(this.blockId, this.linkId);
    this.dialogRef.close();
  }
}
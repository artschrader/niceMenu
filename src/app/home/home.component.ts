import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Block} from '../models/block';
import {Blockid} from '../models/blockid';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddLinkComponent } from '../dialogs/add-link/add-link.component';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blocks: Observable<Blockid[]>;

  constructor(private db: DbService, public dialog: MatDialog) {}

   ngOnInit() {
    this.blocks = this.db.getBlocks();
  }
  OpenDialog(id: string) {
    const dialogRef = this.dialog.open(AddLinkComponent);
    dialogRef.componentInstance.blockId = id;
  }

}

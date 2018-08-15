import { Component, OnInit, Inject } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Link } from '../../models/link';
import { Linkid } from '../../models/linkid';
import { DbService } from '../../services/db.service';
import { MatDialogRef } from '@angular/material';
import { AddLinkComponent } from '../add-link/add-link.component';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.css']
})
export class EditLinkComponent implements OnInit {
  myForm: FormGroup;
  public blockId: string;
  public linkid: Linkid;

  
  constructor(private fb: FormBuilder, private db: DbService, public dialogRef: MatDialogRef<AddLinkComponent>) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
    this.myForm.setValue({ 'title' : this.linkid.title, 'url' : this.linkid.url });
    console.log(this.linkid);
  }

  editLink(post) {
    console.log(post);
    this.linkid.title = post.title;
    this.linkid.url = post.url;
    console.log(this.linkid);
    this.db.updateLink(this.blockId, this.linkid);
    this.dialogRef.close();
  }

}

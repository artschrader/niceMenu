import { Component, OnInit, Inject } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Link } from '../../models/link';
import { DbService } from '../../services/db.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  myForm: FormGroup;
  public blockId: string;
  private link: Link;

  constructor(private fb: FormBuilder, private db: DbService, public dialogRef: MatDialogRef<AddLinkComponent>) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  addLink(post) {
    console.log(post);
    this.link = {'title': post.title, 'url': post.url};
    this.db.addLink(this.blockId, this.link);
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import {  ReactiveFormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  form: FormGroup;
  public blockId: string;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      title: 'title',
      url: 'url'
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    
  }

}

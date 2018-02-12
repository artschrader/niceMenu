import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Link} from '../models/link';
import {Linkid} from '../models/linkid';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  links: Observable<Linkid[]>;

  @Input()
  currentBlockId: string;

  constructor(private db: DbService) { }

  ngOnInit() {
    this.links = this.db.getLinks(this.currentBlockId);
    }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-exclusive-article',
  templateUrl: './exclusive-article.component.html',
  styleUrls: ['./exclusive-article.component.css']
})
export class ExclusiveArticleComponent implements OnInit {
  @Input() childArticleList: Article[];
  constructor() { }

  ngOnInit() {
  }

}

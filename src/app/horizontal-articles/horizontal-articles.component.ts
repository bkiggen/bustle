import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-horizontal-articles',
  templateUrl: './horizontal-articles.component.html',
  styleUrls: ['./horizontal-articles.component.css']
})
export class HorizontalArticlesComponent implements OnInit {
  @Input() childArticleList: Article[];
  constructor() {

  }

  ngOnInit() {
  }

}

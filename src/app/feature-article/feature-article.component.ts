import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-feature-article',
  templateUrl: './feature-article.component.html',
  styleUrls: ['./feature-article.component.css']
})
export class FeatureArticleComponent implements OnInit {
  @Input() childArticleList: Article[];
  constructor() { }

  ngOnInit() {
  }

}

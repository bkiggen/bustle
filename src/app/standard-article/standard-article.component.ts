import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-standard-article',
  templateUrl: './standard-article.component.html',
  styleUrls: ['./standard-article.component.css']
})
export class StandardArticleComponent implements OnInit {
  @Input() childArticleList: Article[];
  constructor() { }

  ngOnInit() {
  }

}

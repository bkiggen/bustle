import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feature-article',
  templateUrl: './feature-article.component.html',
  styleUrls: ['./feature-article.component.css']
})
export class FeatureArticleComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  articleTest: Article[];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.articleTest = this.articles[0];
  }

  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }
}

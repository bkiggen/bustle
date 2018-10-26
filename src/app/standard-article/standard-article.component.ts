import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-standard-article',
  templateUrl: './standard-article.component.html',
  styleUrls: ['./standard-article.component.css'],
  providers: [ArticleService]
})

export class StandardArticleComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;
  currentRoute: string = this.route.url;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  }

}

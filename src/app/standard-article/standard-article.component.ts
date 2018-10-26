import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-standard-article',
  templateUrl: './standard-article.component.html',
  styleUrls: ['./standard-article.component.css'],
  providers: [ArticleService]
})
export class StandardArticleComponent implements OnInit {
  @Input() childArticleList: Article[];
  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  goToDetailPage(clickedArticle: Article) {
    this.router.navigate(['articles', clickedArticle.id]);
  }

}

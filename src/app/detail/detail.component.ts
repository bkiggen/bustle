import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../models/article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ArticleService]
})
export class DetailComponent implements OnInit {
  articleId: number;
  articleToDisplay: Article;

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.articleId = parseInt(urlParametersArray['id']);
    });

    this.articleService.getArticleById(this.articleId).subscribe(dataLastEmittedFromObserver => {
      this.articleToDisplay = new Article(dataLastEmittedFromObserver.articleTitle, dataLastEmittedFromObserver.articleDescription, dataLastEmittedFromObserver.articleImageURL, dataLastEmittedFromObserver.articleAuthor, dataLastEmittedFromObserver.articleId);
    });
  }

}

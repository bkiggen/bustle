import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [ArticleService]
})
export class SplashComponent{

  constructor(private articleService: ArticleService, private router: Router) { }

}

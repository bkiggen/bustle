import { Component } from '@angular/core';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  standardArticleList: standardArticleList[];
  horizontalArticleList: horizontalArticleList[];
  featuredArticleList: featuredArticleList[];
  exclusiveArticleList: exclusiveArticleList[];
  constructor() { }


}

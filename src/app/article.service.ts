import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { standardArticleList, exclusiveArticleList, featuredArticleList, horizontalArticleList} from './mock-datbase';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get() {
    return
  }
}

import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { standardArticleList, exclusiveArticleList, featuredArticleList, horizontalArticleList} from './mock-datbase';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getStandardArticles() {
    return standardArticleList;
  }

  getArticleById(articleId: number) {
    for (var i = 0; i <= ARTICLES.length - 1; i++){
      if (ARTICLES[i].id === albumId){
        return ARTICLES[i];
      }
    }
  }
}

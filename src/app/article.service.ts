import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
// import { standardArticleList, exclusiveArticleList, featuredArticleList, horizontalArticleList} from './mock-datbase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }
  getArticles(){
    return this.articles;
  }

  getArticleById(articleId: number) {
    return this.database.object('articles/' + articleId);
  }
}

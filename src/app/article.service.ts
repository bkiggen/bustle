import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
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

  addarticle(newarticle: article) {
  this.articles.push(newarticle);
}

  updatearticle(localUpdatedarticle) {
    var articleEntryInFirebase = this.getarticleById(localUpdatedarticle.$key);
    articleEntryInFirebase.update({articleTitle: localUpdatedarticle.articleTitle, articleDescription: localUpdatedarticle.articleDescription, articleImageURL: localUpdatedarticle.articleImageURL, articleAuthor: localUpdatedarticle.articleAuthor, articleId: localUpdatedarticle.articleId });
  }

  getArticleById(articleId: number) {
    return this.database.object('articles/' + articleId);
  }
  deletearticle(localarticleToDelete) {
  var articleEntryInFirebase = this.getarticleById(localarticleToDelete.$key);
  articleEntryInFirebase.remove();
}
}

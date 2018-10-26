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

  addArticle(newArticle: Article) {
  this.articles.push(newArticle);
}

  updatearticle(localUpdatedArticle) {
    var articleEntryInFirebase = this.getArticleById(localUpdatedArticle.$key);
    articleEntryInFirebase.update({articleTitle: localUpdatedArticle.articleTitle, articleDescription: localUpdatedArticle.articleDescription, articleImageURL: localUpdatedArticle.articleImageURL, articleAuthor: localUpdatedArticle.articleAuthor, articleId: localUpdatedArticle.articleId });
  }

  getArticleById(articleId: number) {
    return this.database.object('articles/' + articleId);
  }
  deletearticle(localArticleToDelete) {
  var articleEntryInFirebase = this.getArticleById(localArticleToDelete.$key);
  articleEntryInFirebase.remove();
}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HorizontalArticlesComponent } from './horizontal-articles/horizontal-articles.component';
import { FeatureArticleComponent } from './feature-article/feature-article.component';
import { StandardArticleComponent } from './standard-article/standard-article.component';
import { ExclusiveArticleComponent } from './exclusive-article/exclusive-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalArticlesComponent,
    FeatureArticleComponent,
    StandardArticleComponent,
    ExclusiveArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

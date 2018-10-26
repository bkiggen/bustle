import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HorizontalArticlesComponent } from './horizontal-articles/horizontal-articles.component';
import { FeatureArticleComponent } from './feature-article/feature-article.component';
import { StandardArticleComponent } from './standard-article/standard-article.component';
import { ExclusiveArticleComponent } from './exclusive-article/exclusive-article.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from './app.routing';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorizontalArticlesComponent,
    FeatureArticleComponent,
    StandardArticleComponent,
    ExclusiveArticleComponent,
    SplashComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

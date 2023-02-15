import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';

@NgModule({
  declarations: [AppComponent, NewsListComponent, ReviewsListComponent, VideogamesListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

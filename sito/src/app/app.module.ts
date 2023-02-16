import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { ReviewsDetailsComponent } from './components/reviews-details/reviews-details.component';
import { VideogamesDetailsComponent } from './components/videogames-details/videogames-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  declarations: [
    AppComponent,
    NewsListComponent,
    ReviewsListComponent,
    VideogamesListComponent,
    NewsDetailsComponent,
    ReviewsDetailsComponent,
    VideogamesDetailsComponent,
    NavbarComponent,
    FooterComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

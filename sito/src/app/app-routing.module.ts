import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ReviewsListComponent } from './components/reviews-list/reviews-list.component';
import { VideogamesListComponent } from './components/videogames-list/videogames-list.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { ReviewsDetailsComponent } from './components/reviews-details/reviews-details.component';
import { VideogamesDetailsComponent } from './components/videogames-details/videogames-details.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent,
  },
  {
    path: 'reviews',
    component: ReviewsListComponent,
  },
  {
    path: 'videogames',
    component: VideogamesListComponent,
  },
  {
    path: 'news/:_id',
    component: NewsDetailsComponent,
  },
  {
    path: 'reviews/:_id',
    component: ReviewsDetailsComponent,
  },
  {
    path: 'videogames/:_id',
    component: VideogamesDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

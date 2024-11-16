import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { SeriesLessonPageComponent } from './pages/series-lesson-page/series-lesson-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'categories',
    component: CategoryListPageComponent,
  },
  {
    path: 'categories/:categoryId',
    component: CategoryPageComponent,
  },
  {
    path: 'categories/:categoryId/lessons/:lessonId',
    component: LessonPageComponent,
  },
  {
    path: 'categories/:categoryId/series/:seriesId',
    component: SeriesPageComponent,
  },
  {
    path: 'categories/:categoryId/series/:seriesId/:seriesLessonId',
    component: SeriesLessonPageComponent,
  },
];

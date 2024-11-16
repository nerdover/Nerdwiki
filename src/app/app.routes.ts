import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CategoryListPageComponent } from './pages/category-list-page/category-list-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { SeriesLessonPageComponent } from './pages/series-lesson-page/series-lesson-page.component';
import { inject } from '@angular/core';
import { ContentService } from './core/services/content.service';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    resolve: {
      categories: () => {
        const repo = inject(ContentService);
        return repo.getCategories();
      },
    },
  },
  {
    path: 'categories',
    component: CategoryListPageComponent,
    resolve: {
      categories: () => {
        const repo = inject(ContentService);
        return repo.getCategories();
      },
    },
  },
  {
    path: 'categories/:categoryId',
    component: CategoryPageComponent,
    resolve: {
      category: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getCategoryById(route.params['categoryId']);
      },
      lessons: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getLessonsInCategory(route.params['categoryId']);
      },
      series: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getSeriesInCategory(route.params['categoryId']);
      },
    },
  },
  {
    path: 'categories/:categoryId/lessons/:lessonId',
    component: LessonPageComponent,
    resolve: {
      lesson: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getLessonById(
          route.params['lessonId'],
          route.params['categoryId']
        );
      },
    },
  },
  {
    path: 'categories/:categoryId/series/:seriesId',
    component: SeriesPageComponent,
    resolve: {
      series: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getSeriesById(
          route.params['seriesId'],
          route.params['categoryId']
        );
      },
      seriesLessons: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getSeriesLessonsInSeries(
          route.params['seriesId'],
          route.params['categoryId']
        );
      },
    },
  },
  {
    path: 'categories/:categoryId/series/:seriesId/:seriesLessonId',
    component: SeriesLessonPageComponent,
    resolve: {
      seriesLesson: (route: ActivatedRouteSnapshot) => {
        const repo = inject(ContentService);
        return repo.getSeriesLessonById(
          route.params['seriesLessonId'],
          route.params['seriesId'],
          route.params['categoryId']
        );
      },
    },
  },
];

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { Category } from '../models/category';
import { Lesson } from '../models/lesson';
import { ResponseWrapper } from '../models/response-wrapper';
import { Series } from '../models/series';
import { SeriesLesson } from '../models/series-lesson';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private readonly http = inject(HttpClient);

  private readonly _category_url = '/api/categories';
  private readonly _lessons_url = '/api/lessons';
  private readonly _series_url = '/api/series';
  private readonly _series_lessons_url = '/api/serieslessons';

  getCategories = () =>
    this.http
      .get<ResponseWrapper<Category[]>>(this._category_url)
      .pipe(map((res) => res.data));
  getLessons = () =>
    this.http
      .get<ResponseWrapper<Lesson[]>>(this._lessons_url)
      .pipe(map((res) => res.data));
  getSeries = () =>
    this.http
      .get<ResponseWrapper<Series[]>>(this._series_url)
      .pipe(map((res) => res.data));
  getSeriesLessons = () =>
    this.http
      .get<ResponseWrapper<SeriesLesson[]>>(this._series_lessons_url)
      .pipe(map((res) => res.data));

  getCategoryById = (id: string) =>
    this.http
      .get<ResponseWrapper<Category>>(`${this._category_url}/${id}`)
      .pipe(map((res) => res.data));
  getLessonById = (id: string, categoryId: string) =>
    this.http
      .get<ResponseWrapper<Lesson>>(`${this._lessons_url}/${id}`, {
        params: { categoryId },
      })
      .pipe(map((res) => res.data));
  getSeriesById = (id: string, categoryId: string) =>
    this.http
      .get<ResponseWrapper<Series>>(`${this._series_url}/${id}`, {
        params: { categoryId },
      })
      .pipe(map((res) => res.data));
  getSeriesLessonById = (id: string, seriesId: string, categoryId: string) =>
    this.http
      .get<ResponseWrapper<SeriesLesson>>(`${this._series_lessons_url}/${id}`, {
        params: { categoryId, seriesId },
      })
      .pipe(map((res) => res.data));

  getLessonsInCategory = (categoryId: string) =>
    this.http
      .get<ResponseWrapper<Lesson[]>>(
        `${this._lessons_url}/category/${categoryId}`
      )
      .pipe(map((res) => res.data));
  getSeriesInCategory = (categoryId: string) =>
    this.http
      .get<ResponseWrapper<Series[]>>(
        `${this._series_url}/category/${categoryId}`
      )
      .pipe(map((res) => res.data));
  getSeriesLessonsInSeries = (seriesId: string, categoryId: string) =>
    this.http
      .get<ResponseWrapper<SeriesLesson[]>>(
        `${this._series_lessons_url}/series/${seriesId}`,
        {
          params: { categoryId },
        }
      )
      .pipe(map((res) => res.data));
}

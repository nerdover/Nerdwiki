import { Component, inject, Input, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { SeriesLesson } from '../../core/models/series-lesson';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nwk-series-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.scss',
})
export class SeriesPageComponent implements OnInit {
  private readonly repo = inject(ContentService);

  @Input() categoryId?: string;
  @Input() seriesId?: string;

  seriesLessons?: SeriesLesson[];

  ngOnInit(): void {
    if (!this.categoryId || !this.seriesId) {
      return;
    }
    this.repo
      .getSeriesLessonsInSeries(this.seriesId, this.categoryId)
      .subscribe((seriesLessons) => {
        this.seriesLessons = seriesLessons;
      });
  }
}

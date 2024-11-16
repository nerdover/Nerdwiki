import { Component, inject, Input } from '@angular/core';
import { Lesson } from '../../core/models/lesson';
import { ContentService } from '../../core/services/content.service';
import { SeriesLesson } from '../../core/models/series-lesson';
import { ContentViewComponent } from "../../components/content-view/content-view.component";

@Component({
  selector: 'nwk-series-lesson-page',
  standalone: true,
  imports: [ContentViewComponent],
  templateUrl: './series-lesson-page.component.html',
  styleUrl: './series-lesson-page.component.scss',
})
export class SeriesLessonPageComponent {
  private readonly repo = inject(ContentService);

  @Input() categoryId?: string;
  @Input() seriesId?: string;
  @Input() seriesLessonId?: string;

  seriesLesson?: SeriesLesson;

  ngOnInit(): void {
    if (!this.categoryId || !this.seriesId || !this.seriesLessonId) {
      return;
    }
    this.repo
      .getSeriesLessonById(this.seriesLessonId, this.seriesId, this.categoryId)
      .subscribe((seriesLesson) => {
        this.seriesLesson = seriesLesson;
      });
  }
}

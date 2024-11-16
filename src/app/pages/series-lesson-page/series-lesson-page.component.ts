import { Component, Input } from '@angular/core';
import { SeriesLesson } from '../../core/models/series-lesson';
import { ContentViewComponent } from '../../components/content-view/content-view.component';
import { getColorScheme } from '../../core/themes/theme-generator';

@Component({
  selector: 'nwk-series-lesson-page',
  standalone: true,
  imports: [ContentViewComponent],
  templateUrl: './series-lesson-page.component.html',
  styleUrl: './series-lesson-page.component.scss',
})
export class SeriesLessonPageComponent {
  @Input() seriesLesson?: SeriesLesson;

  ngOnInit(): void {
    if (this.seriesLesson?.hex) {
      getColorScheme(this.seriesLesson.hex);
    }
  }
}

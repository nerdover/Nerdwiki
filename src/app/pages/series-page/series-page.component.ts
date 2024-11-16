import { Component, Input, OnInit } from '@angular/core';
import { SeriesLesson } from '../../core/models/series-lesson';
import { RouterLink } from '@angular/router';
import { Series } from '../../core/models/series';
import { getColorScheme } from '../../core/themes/theme-generator';

@Component({
  selector: 'nwk-series-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.scss',
})
export class SeriesPageComponent implements OnInit {
  @Input() series?: Series;
  @Input() seriesLessons?: SeriesLesson[];

  ngOnInit(): void {
    if (this.series?.hex) {
      getColorScheme(this.series.hex);
    }
  }
}

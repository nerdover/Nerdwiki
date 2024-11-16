import { Component, Input, OnInit } from '@angular/core';
import { ContentViewComponent } from '../../components/content-view/content-view.component';
import { Lesson } from '../../core/models/lesson';
import { getColorScheme } from '../../core/themes/theme-generator';

@Component({
  selector: 'nwk-lesson-page',
  standalone: true,
  imports: [ContentViewComponent],
  templateUrl: './lesson-page.component.html',
  styleUrl: './lesson-page.component.scss',
})
export class LessonPageComponent implements OnInit {
  @Input() lesson?: Lesson;

  ngOnInit(): void {
    if (this.lesson?.hex) {
      getColorScheme(this.lesson.hex);
    }
  }
}

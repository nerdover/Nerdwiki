import { Component, inject, Input, OnInit } from '@angular/core';
import { ContentViewComponent } from '../../components/content-view/content-view.component';
import { ContentService } from '../../core/services/content.service';
import { Lesson } from '../../core/models/lesson';

@Component({
  selector: 'nwk-lesson-page',
  standalone: true,
  imports: [ContentViewComponent],
  templateUrl: './lesson-page.component.html',
  styleUrl: './lesson-page.component.scss',
})
export class LessonPageComponent implements OnInit {
  private readonly repo = inject(ContentService);

  @Input() categoryId?: string;
  @Input() lessonId?: string;

  lesson?: Lesson;

  ngOnInit(): void {
    if (!this.categoryId || !this.lessonId) {
      return;
    }
    this.repo
      .getLessonById(this.lessonId, this.categoryId)
      .subscribe((lesson) => {
        this.lesson = lesson;
      });
  }
}

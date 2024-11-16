import { Component, inject, Input, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { Lesson } from '../../core/models/lesson';
import { Series } from '../../core/models/series';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

enum CategoryTab {
  Lessons = 'Lessons',
  Series = 'Series',
}

@Component({
  selector: 'nwk-category-page',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent implements OnInit {
  readonly repo = inject(ContentService);

  @Input() categoryId?: string;

  currentTab = CategoryTab.Lessons;

  get CategoryTab() {
    return CategoryTab;
  }

  lessons?: Lesson[];
  series?: Series[];

  ngOnInit(): void {
    if (!this.categoryId) {
      return;
    }
    this.repo.getLessonsInCategory(this.categoryId).subscribe((lessons) => {
      this.lessons = lessons;
    });

    this.repo.getSeriesInCategory(this.categoryId).subscribe((series) => {
      this.series = series;
    });
  }

  toLessonsTab() {
    this.currentTab = CategoryTab.Lessons;
  }

  toSeriesTab() {
    this.currentTab = CategoryTab.Series;
  }
}

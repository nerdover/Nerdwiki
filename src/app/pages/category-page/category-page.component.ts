import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from '../../core/models/lesson';
import { Series } from '../../core/models/series';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../../core/models/category';
import { getColorScheme } from '../../core/themes/theme-generator';

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
  currentTab = CategoryTab.Lessons;

  get CategoryTab() {
    return CategoryTab;
  }

  @Input() category?: Category;
  @Input() lessons?: Lesson[];
  @Input() series?: Series[];

  ngOnInit(): void {
    if (this.category?.hex) {
      getColorScheme(this.category.hex);
    }
  }

  toLessonsTab() {
    this.currentTab = CategoryTab.Lessons;
  }

  toSeriesTab() {
    this.currentTab = CategoryTab.Series;
  }
}

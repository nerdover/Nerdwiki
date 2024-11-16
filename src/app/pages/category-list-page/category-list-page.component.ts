import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nwk-category-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-list-page.component.html',
  styleUrl: './category-list-page.component.scss',
})
export class CategoryListPageComponent {
  readonly repo = inject(ContentService);
}

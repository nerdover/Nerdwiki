import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../core/models/category';

@Component({
  selector: 'nwk-category-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-list-page.component.html',
  styleUrl: './category-list-page.component.scss',
})
export class CategoryListPageComponent {
  @Input() categories?: Category[];
}

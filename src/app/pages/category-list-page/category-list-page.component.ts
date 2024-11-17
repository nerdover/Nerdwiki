import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../../core/models/category';
import { CurrentTransitionService } from '../../core/services/current-transition.service';

@Component({
  selector: 'nwk-category-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-list-page.component.html',
  styleUrl: './category-list-page.component.scss',
})
export class CategoryListPageComponent {
  readonly transitionService = inject(CurrentTransitionService);

  @Input() categories?: Category[];
  
}

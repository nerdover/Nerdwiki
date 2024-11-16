import { Component, Input } from '@angular/core';
import { Category } from '../../core/models/category';

@Component({
  selector: 'nwk-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  @Input() categories?: Category[];
}

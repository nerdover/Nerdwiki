import { Component, HostListener, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentService } from './core/services/content.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly repo = inject(ContentService);
  private readonly router = inject(Router);

  delta = 64;
  lastScrollTop = 0;

  showNavigation = true;
  navTransparent = false;
  useFallbackBlock = true;

  ngOnInit(): void {
    this.repo.loadCategories();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (
          event.url.match(
            new RegExp('^/categories/[^/]+/(lessons/[^/]+|series/[^/]+/[^/]+)$')
          )
        ) {
          this.useFallbackBlock = false;
          this.navTransparent = true;
        } else {
          this.useFallbackBlock = true;
          this.navTransparent = false;
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (scrollY > this.lastScrollTop && this.lastScrollTop > 64) {
      this.showNavigation = false;
    }

    if (scrollY <= this.lastScrollTop) {
      this.showNavigation = true;
    }
    this.lastScrollTop = scrollY <= 0 ? 0 : scrollY;
  }
}

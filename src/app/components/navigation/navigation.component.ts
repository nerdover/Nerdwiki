import { Component } from '@angular/core';
import { Switch } from '../../shared/utils/switch';
import { fade } from '../../shared/animations/fade';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nwk-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [fade],
})
export class NavigationComponent {
  menuPanel = new Switch();

  menu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Contents',
      link: '/categories',
    },
  ];

  openMenuAndLockBody() {
    this.menuPanel.open();
    document.body.classList.add('overflow-hidden');
  }

  closeMenuAndUnlockBody() {
    this.menuPanel.close();
    document.body.classList.remove('overflow-hidden');
  }
}

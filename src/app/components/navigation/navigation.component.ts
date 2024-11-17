import { Component, Input } from '@angular/core';
import { Switch } from '../../shared/utils/switch';
import { fade } from '../../shared/animations/fade';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'nwk-navigation',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [fade],
})
export class NavigationComponent {
  @Input() transparent: boolean = false
  @Input() show: boolean = true;

  menuPanel = new Switch();

  menu = [
    {
      name: 'หน้าหลัก',
      link: '/',
    },
    {
      name: 'คลังบทเรียน',
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

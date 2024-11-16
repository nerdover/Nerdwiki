import { animate, style, transition, trigger } from '@angular/animations';

export const heightSlide = trigger(`heightSlide`, [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0,
    }),
    animate(
      '200ms cubic-bezier(0.4, 0, 0.2, 1)',
      style({
        height: '*',
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    style({
      height: '*',
      opacity: 1,
    }),
    animate(
      '200ms cubic-bezier(0.4, 0, 0.2, 1)',
      style({
        height: 0,
        opacity: 0,
      })
    ),
  ]),
]);

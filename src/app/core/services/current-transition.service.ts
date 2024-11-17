import { Injectable, signal } from '@angular/core';
import { ViewTransitionInfo } from '@angular/router';
import { Identifiable } from '../models/base/identifiable';

@Injectable({
  providedIn: 'root',
})
export class CurrentTransitionService {
  readonly currentTransition = signal<ViewTransitionInfo | null>(null);

  viewTransitionName<T extends Identifiable>(
    entity: T,
    param: string,
    name: string
  ) {
    const transition = this.currentTransition();
    const matchedView =
      transition?.to.firstChild?.params[param] === entity.id ||
      transition?.from.firstChild?.params[param] === entity.id;
    return matchedView ? name : '';
  }
}

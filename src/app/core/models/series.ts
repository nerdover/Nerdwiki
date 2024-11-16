import { Extension } from './base/extension';
import { Identifiable } from './base/identifiable';
import { Traceable } from './base/traceable';

export interface Series extends Identifiable, Traceable, Extension {
  categoryId: string;
}

export interface SeriesDto extends Partial<Series> {}

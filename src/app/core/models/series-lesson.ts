import { Extension } from './base/extension';
import { Identifiable } from './base/identifiable';
import { Traceable } from './base/traceable';

export interface SeriesLesson extends Identifiable, Traceable, Extension {
  categoryId: string;
  seriesId: string;
  content?: string;
}

export interface SeriesLessonDto extends Partial<SeriesLesson> {}

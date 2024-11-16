import { Extension } from './base/extension';
import { Identifiable } from './base/identifiable';
import { Traceable } from './base/traceable';

export interface Lesson extends Identifiable, Traceable, Extension {
  categoryId: string;
  content?: string;
}

export interface LessonDto extends Partial<Lesson> {}

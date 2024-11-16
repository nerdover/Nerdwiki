import { Extension } from './base/extension';
import { Identifiable } from './base/identifiable';
import { Traceable } from './base/traceable';

export interface Category extends Identifiable, Traceable, Extension {}
export interface CategoryDto extends Partial<Category> {}

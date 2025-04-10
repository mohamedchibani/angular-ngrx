import { signalStore, withState } from '@ngrx/signals';
import { categoryState } from './category.state';

export const CategoryStore = signalStore(withState(categoryState));

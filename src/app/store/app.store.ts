import { counterReducer } from './counter/counter.reducer';

export const appStore = {
  counter: { name: 'counter', reducer: counterReducer },
  courses: {},
};

import { computed, effect, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  /* count = signal<number>(0);
  dblCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log(this.count());
      localStorage.setItem('count', JSON.stringify(this.count()));
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }

  decrement() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(0);
  } */

  count = new BehaviorSubject<number>(0);

  getCount() {
    return this.count.asObservable();
  }

  increment() {
    this.count.next(this.count.getValue() + 1);
  }

  decrement() {
    this.count.next(this.count.getValue() - 1);
  }

  reset() {
    this.count.next(0);
  }
}

import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../../store/counter/counter.selector';
import { Observable } from 'rxjs';
import {
  descrement,
  increment,
  reset,
} from '../../store/counter/counter.actions';

@Component({
  selector: 'app-counter-page',
  imports: [AsyncPipe],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  store = inject(Store);

  count!: Observable<number>;

  ngOnInit() {
    this.count = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(descrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}

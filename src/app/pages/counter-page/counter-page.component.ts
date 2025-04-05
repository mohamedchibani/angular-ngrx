import { AsyncPipe } from '@angular/common';
import { CounterService } from './../../services/counter.service';
import { Component, computed, effect, signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from '../../store/counter/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-page',
  imports: [AsyncPipe],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counterService = inject(CounterService);
  store = inject(Store);

  count!: Observable<number>;

  ngOnInit() {
    this.count = this.store.select(selectCount);
  }
}

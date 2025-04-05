import { AsyncPipe } from '@angular/common';
import { CounterService } from './../../services/counter.service';
import { Component, computed, effect, signal, inject } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [AsyncPipe],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counterService = inject(CounterService);
}

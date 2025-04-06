import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectToast } from '../../../store/toast/toast.selectors';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  store = inject(Store);

  message = '';
  position = '';
  type = '';
  duration = 4000;
  isVisible = false;

  ngOnInit() {
    this.store.select(selectToast).subscribe((res) => {
      const { message, position, type, duration } = res;
      this.message = message;
      this.position = position;
      this.type = type;
      this.duration = duration;
    });
  }
}

import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectToast } from '../../../store/toast/toast.selectors';
import { NgClass } from '@angular/common';
import { closeNotification } from '../../../store/toast/toast.actions';

@Component({
  selector: 'app-toast',
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  store = inject(Store);

  message = '';
  position = '';
  color = '';
  duration = 4000;
  isVisible = false;

  ngOnInit() {
    this.store.select(selectToast).subscribe((res) => {
      const { message, position, color, duration, isVisible } = res;
      this.message = message;
      this.position = position;
      this.color = color;
      this.duration = duration;
      this.isVisible = isVisible;

      if (this.isVisible) {
        setTimeout(() => {
          this.close();
        }, this.duration);
      }
    });
  }

  close() {
    this.store.dispatch(closeNotification());
  }
}

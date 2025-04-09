import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUrl } from '../../store/router/router.selector';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  store = inject(Store);

  ngOnInit() {
    this.store.select(selectCurrentUrl).subscribe((res) => console.log(res));
  }
}

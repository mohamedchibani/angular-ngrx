import { Component, inject, Input } from '@angular/core';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { ContactModel } from '../../../store/contact/contact.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact-grid',
  imports: [ContactActionsComponent],
  templateUrl: './contact-grid.component.html',
  styleUrl: './contact-grid.component.css',
})
export class ContactGridComponent {
  @Input() contacts: ContactModel[] | null = [];
  store = inject(Store);
}

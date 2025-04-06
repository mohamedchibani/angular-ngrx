import { Component, inject, Input } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';
import { Store } from '@ngrx/store';
import {
  deleteContact,
  toggleActiveContact,
} from '../../../store/contact/contact.actions';

@Component({
  selector: 'app-contact-actions',
  imports: [],
  templateUrl: './contact-actions.component.html',
  styleUrl: './contact-actions.component.css',
})
export class ContactActionsComponent {
  @Input() contact!: ContactModel;

  store = inject(Store);

  delete() {
    if (!confirm('Are you sure to delete this contact')) return;

    if (this.contact.id) {
      this.store.dispatch(deleteContact({ id: this.contact.id }));
    }
  }

  toggle() {
    if (this.contact.id) {
      this.store.dispatch(toggleActiveContact({ id: this.contact.id }));
    }
  }
}

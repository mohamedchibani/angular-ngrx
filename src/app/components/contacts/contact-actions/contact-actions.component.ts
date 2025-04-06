import { contacts } from './../../../data';
import { Component, inject, Input } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';
import { Store } from '@ngrx/store';
import {
  deleteContact,
  editContact,
  toggleActiveContact,
} from '../../../store/contact/contact.actions';
import { notify } from '../../../store/toast/toast.actions';

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

  edit() {
    this.store.dispatch(editContact({ contact: this.contact }));
  }
}

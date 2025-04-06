import { Component, inject } from '@angular/core';
import { ContactGridComponent } from '../../components/contacts/contact-grid/contact-grid.component';
import { ContactListComponent } from '../../components/contacts/contact-list/contact-list.component';
import { AsyncPipe } from '@angular/common';
import { ContactFormComponent } from '../../components/contacts/contact-form/contact-form.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectContactOptions } from '../../store/contact/contact.selectors';
import { show } from '../../store/contact/contact.actions';

@Component({
  selector: 'app-contacts',
  imports: [
    ContactGridComponent,
    ContactListComponent,
    AsyncPipe,
    ContactFormComponent,
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  store = inject(Store);
  options!: Observable<{ edit: boolean; showForm: boolean }>;

  ngOnInit() {
    this.options = this.store.select(selectContactOptions);
  }

  show() {
    this.store.dispatch(show());
  }
}

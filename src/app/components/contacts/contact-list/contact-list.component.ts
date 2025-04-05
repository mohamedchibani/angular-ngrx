import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';
import { AsyncPipe } from '@angular/common';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { Store } from '@ngrx/store';
import { selectContacts } from '../../../store/contact/contact.selectors';

@Component({
  selector: 'app-contact-list',
  imports: [AsyncPipe, ContactActionsComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  contacts!: Observable<ContactModel[]>;
  store = inject(Store);

  ngOnInit() {
    this.contacts = this.store.select(selectContacts);
  }
}

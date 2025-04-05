import { Component } from '@angular/core';
import { ContactGridComponent } from '../../components/contacts/contact-grid/contact-grid.component';
import { ContactListComponent } from '../../components/contacts/contact-list/contact-list.component';
import { AsyncPipe } from '@angular/common';
import { ContactFormComponent } from '../../components/contacts/contact-form/contact-form.component';

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
export class ContactsComponent {}

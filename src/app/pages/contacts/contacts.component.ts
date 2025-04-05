import { Component } from '@angular/core';
import { ContactGridComponent } from '../../components/contacts/contact-grid/contact-grid.component';
import { ContactListComponent } from '../../components/contacts/contact-list/contact-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [ContactGridComponent, ContactListComponent, AsyncPipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {}

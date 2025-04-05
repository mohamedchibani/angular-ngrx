import { Observable } from 'rxjs';
import { contacts } from './../../../data';
import { Component } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';
import { AsyncPipe } from '@angular/common';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';

@Component({
  selector: 'app-contact-list',
  imports: [AsyncPipe, ContactActionsComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  contacts!: Observable<ContactModel[]>;
}

import { Component, inject, Input } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contact-list',
  imports: [ContactActionsComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent {
  @Input() contacts: ContactModel[] | null = [];
  store = inject(Store);
}

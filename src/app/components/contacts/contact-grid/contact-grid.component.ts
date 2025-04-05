import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { Observable } from 'rxjs';
import { ContactModel } from '../../../store/contact/contact.model';
import { Store } from '@ngrx/store';
import { selectContacts } from '../../../store/contact/contact.selectors';

@Component({
  selector: 'app-contact-grid',
  imports: [ContactActionsComponent, AsyncPipe],
  templateUrl: './contact-grid.component.html',
  styleUrl: './contact-grid.component.css',
})
export class ContactGridComponent {
  contacts!: Observable<ContactModel[]>;
  store = inject(Store);

  ngOnInit() {
    this.contacts = this.store.select(selectContacts);
  }
}

import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { Observable } from 'rxjs';
import { ContactModel } from '../../../store/contact/contact.model';

@Component({
  selector: 'app-contact-grid',
  imports: [ContactActionsComponent, AsyncPipe],
  templateUrl: './contact-grid.component.html',
  styleUrl: './contact-grid.component.css',
})
export class ContactGridComponent {
  contacts!: Observable<ContactModel[]>;
}

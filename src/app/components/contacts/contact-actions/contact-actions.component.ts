import { Component, Input } from '@angular/core';
import { ContactModel } from '../../../store/contact/contact.model';

@Component({
  selector: 'app-contact-actions',
  imports: [],
  templateUrl: './contact-actions.component.html',
  styleUrl: './contact-actions.component.css',
})
export class ContactActionsComponent {
  @Input() contact!: ContactModel;
}

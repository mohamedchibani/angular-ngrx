import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addContact,
  cancel,
  updateContact,
} from '../../../store/contact/contact.actions';
import { random } from 'lodash';
import { selectContact } from '../../../store/contact/contact.selectors';
import { ContactModel } from '../../../store/contact/contact.model';
import { notify } from '../../../store/toast/toast.actions';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  store = inject(Store);

  @Input() edit!: boolean;

  id!: number;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      active: new FormControl(true),
    });
  }

  ngOnInit() {
    this.store.select(selectContact).subscribe((res) => {
      if (res) {
        this.id = res.id ?? 0;
        this.contactForm.patchValue(res);
      } else {
        this.contactForm.reset();
      }
    });
  }

  close() {
    this.store.dispatch(cancel());
  }

  submit() {
    if (this.contactForm.invalid) {
      alert('contact form is invalid');
      return;
    }

    if (this.edit) {
      this.setContact();
    } else {
      this.createContact();
    }
  }

  setContact() {
    const contact: ContactModel = {
      ...this.contactForm.value,
      id: this.id,
    };

    this.store.dispatch(updateContact({ contact: contact }));
  }

  createContact() {
    const contact = {
      ...this.contactForm.value,
      id: random(20, 2500),
    };

    this.store.dispatch(addContact({ contact }));
  }

  get name() {
    return this.contactForm.get('name');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get active() {
    return this.contactForm.get('active');
  }
}

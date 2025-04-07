import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContactModel } from '../store/contact/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  apiUrl = 'http://localhost:3001/contactsa';

  http = inject(HttpClient);

  loadAll(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(this.apiUrl);
  }

  save(contact: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(this.apiUrl, contact);
  }

  update(contact: ContactModel): Observable<ContactModel> {
    return this.http.put<ContactModel>(`${this.apiUrl}/${contact.id}`, contact);
  }

  toggleStatus(active: boolean, id: number): Observable<ContactModel> {
    return this.http.patch<ContactModel>(`${this.apiUrl}/${id}`, {
      active: active,
    });
  }

  destroy(id: number): Observable<null> {
    return this.http.delete<null>(`${this.apiUrl}/${id}`);
  }
}

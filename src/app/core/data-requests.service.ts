import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact, ContactFormData} from '@models/contact';
import {ApiUrl} from '@config/server';
import {Observable} from 'rxjs/index';

@Injectable()
export class DataRequestsService {

  constructor(private http: HttpClient) {
  }

  public getContactsRequest(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${ApiUrl}/contacts`);
  }

  public removeContactRequest(contactUuid: string): Observable<Contact> {
    return this.http.delete<Contact>(`${ApiUrl}/contacts/${contactUuid}`);
  }

  public addContactRequest(contactFormData: ContactFormData): Observable<Contact> {
    return this.http.post<Contact>(`${ApiUrl}/contacts`, contactFormData);
  }

  public updateContactRequest(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${ApiUrl}/contacts/${contact.uuid}`, contact);
  }

}

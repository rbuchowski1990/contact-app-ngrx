import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Contact, ContactForm} from '@models/contact';
import {ApiUrl} from '@config/server';
import {Observable} from 'rxjs/index';

@Injectable()
export class DataRequestsService {

  constructor(private http: HttpClient) {
  }

  public getContactsRequest(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${ApiUrl}/contacts`);
  }

  public getContactRequest(uuid: string): Observable<Contact> {
    return this.http.get<Contact>(`${ApiUrl}/contact/${uuid}`);
  }

  public getFiltredContactsRequest(value: string): Observable<Contact[]> {
    const param = new HttpParams().set('filter', value);

    return this.http.get<Contact[]>(`${ApiUrl}/contacts?filter=${value}`, {params: param});
  }

  public removeContactRequest(contactUuid: string): Observable<Contact> {
    return this.http.delete<Contact>(`${ApiUrl}/contacts/${contactUuid}`);
  }

  public addContactRequest(contactFormData: ContactForm): Observable<Contact> {
    return this.http.post<Contact>(`${ApiUrl}/contacts`, contactFormData);
  }

  public updateContactRequest(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${ApiUrl}/contacts/${contact.uuid}`, contact);
  }

}

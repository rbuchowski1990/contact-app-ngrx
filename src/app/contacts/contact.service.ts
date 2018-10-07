import {Injectable} from '@angular/core';
import {DataRequestsService} from '../core/data-requests.service';
import {Contact, ContactForm} from '@models/contact';
import {Observable} from 'rxjs/index';

@Injectable()
export class ContactService {

  constructor(private dataRequestsService: DataRequestsService) {
  }

  public getContacts(): Observable<Contact[]> {
    return this.dataRequestsService.getContactsRequest();
  }

  public getContact(contactUuid: string): Observable<Contact> {
    return this.dataRequestsService.getContactRequest(contactUuid);
  }

  public filterByString(value: string): Observable<Contact[]> {
    return this.dataRequestsService.getFiltredContactsRequest(value);
  }

  public removeContact(contactUuid: string): Observable<Contact> {
    return this.dataRequestsService.removeContactRequest(contactUuid);
  }

  public addContact(contact: ContactForm): Observable<Contact> {
    return this.dataRequestsService.addContactRequest(contact);
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this.dataRequestsService.updateContactRequest(contact);
  }
}

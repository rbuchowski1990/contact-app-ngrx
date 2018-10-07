import {Injectable} from '@angular/core';
import {ContactService} from '../../contact.service';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as contactActions from '../actions/contact.actions';
import {debounceTime, map, switchMap} from 'rxjs/internal/operators';
import {
  AddContactAction, DeleteContactAction, FilterContactAction, LoadContactAction,
  UpdateContactAction
} from '../actions/contact.actions';
import {FilterDebounceTime} from '@config/data-table';

@Injectable()
export class ContactEffects {

  constructor(private contactService: ContactService, private actions$: Actions) {
  }

  @Effect() loadContacts$ = this.actions$.pipe(
    ofType(contactActions.LOAD_CONTACTS),
    switchMap(() => {
      return this.contactService.getContacts();
    }),
    map(contacts => (new contactActions.LoadContactsSuccessAction(contacts)))
  );

  @Effect() loadContact$ = this.actions$.pipe(
    ofType(contactActions.LOAD_CONTACT),
    switchMap((action: LoadContactAction) => {
      return this.contactService.getContact(action.payload);
    }),
    map(contact =>

      (new contactActions.LoadContactSuccessAction(contact)))
  );

  @Effect() deleteContact$ = this.actions$.pipe(
    ofType(contactActions.DELETE_CONTACT),
    switchMap((action: DeleteContactAction) => {
      return this.contactService.removeContact(action.payload);
    }),
    map(contact => (new contactActions.DeleteContactSuccessAction(contact.uuid)))
  );


  @Effect() addContact$ = this.actions$.pipe(
    ofType(contactActions.ADD_CONTACT),
    switchMap((action: AddContactAction) => {
      return this.contactService.addContact(action.payload);
    }),
    map(contact => (new contactActions.AddContactSuccessAction(contact)))
  );

  @Effect() updateContact$ = this.actions$.pipe(
    ofType(contactActions.UPDATE_CONTACT),
    switchMap((action: UpdateContactAction) => {
      return this.contactService.updateContact(action.payload);
    }),
    map(contact => (new contactActions.UpdateContactSuccessAction(contact)))
  );

  @Effect() filterContact$ = this.actions$.pipe(
    ofType(contactActions.FILTER_CONTACT),
    debounceTime(FilterDebounceTime),
    switchMap((action: FilterContactAction) => {
      return this.contactService.filterByString(action.payload);
    }),
    map(contacts => (new contactActions.FilterContactSuccessAction(contacts)))
  );
}

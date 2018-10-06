import {Injectable} from '@angular/core';
import {ContactService} from '../contact/contact.service';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as contactActions from './../actions/contact.actions';
import {map, switchMap} from 'rxjs/internal/operators';
import {DeleteContactAction} from '../actions/contact.actions';

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


  @Effect() deleteContact$ = this.actions$.pipe(
    ofType(contactActions.DELETE_CONTACT),
    switchMap((action: DeleteContactAction) => {
      return this.contactService.removeContact(action.payload);
    }),
    map(contact => (new contactActions.DeleteContactSuccessAction(contact.uuid)))
  );
}

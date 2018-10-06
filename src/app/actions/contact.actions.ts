import {Contact} from '@models/contact';
import {Action} from '@models/action';

export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_CONTACTS_SUCCESS = 'LOAD_CONTACTS_SUCCESS';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';

export class LoadContactsAction implements Action<null> {
  readonly type = LOAD_CONTACTS;

  constructor() {

  }
}

export class LoadContactsSuccessAction implements Action<Contact[]> {
  readonly type = LOAD_CONTACTS_SUCCESS;

  constructor(public payload: Contact[]) {

  }
}

export class DeleteContactAction implements Action<string> {
  readonly type = DELETE_CONTACT;

  constructor(public payload: string) {

  }
}

export class DeleteContactSuccessAction implements Action<string> {
  readonly type = DELETE_CONTACT_SUCCESS;

  constructor(public payload: string) {

  }
}

export type Actions
  = LoadContactsAction
  | LoadContactsSuccessAction
  | DeleteContactAction
  | DeleteContactSuccessAction;

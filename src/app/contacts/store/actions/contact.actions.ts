import {Contact, ContactForm} from '@models/contact';
import {Action} from '@ngrx/store';

export const LOAD_CONTACTS = '[Contact] Load contacts';
export const LOAD_CONTACTS_SUCCESS = '[Contact] Load contacts success';

export const LOAD_CONTACT = '[Contact] Load contact';
export const LOAD_CONTACT_SUCCESS = '[Contact] Load contact success';

export const DELETE_CONTACT = '[Contact] delete contact';
export const DELETE_CONTACT_SUCCESS = '[Contact] delete contact success';

export const ADD_CONTACT = '[Contact] add contact';
export const ADD_CONTACT_SUCCESS = '[Contact] add contact success';

export const UPDATE_CONTACT = '[Contact] update contact';
export const UPDATE_CONTACT_SUCCESS = '[Contact] update contact success';

export const FILTER_CONTACT = '[Contact] filter contact';
export const FILTER_CONTACT_SUCCESS = '[Contact] filter contact success';


export class LoadContactsAction implements Action {
  readonly type = LOAD_CONTACTS;

  constructor() {
  }
}

export class LoadContactsSuccessAction implements Action {
  readonly type = LOAD_CONTACTS_SUCCESS;

  constructor(public payload: Contact[]) {

  }
}

export class LoadContactAction implements Action {
  readonly type = LOAD_CONTACT;

  constructor(public payload: string) {
  }
}

export class LoadContactSuccessAction implements Action {
  readonly type = LOAD_CONTACT_SUCCESS;

  constructor(public payload: Contact) {

  }
}

export class DeleteContactAction implements Action {
  readonly type = DELETE_CONTACT;

  constructor(public payload: string) {

  }
}

export class DeleteContactSuccessAction implements Action {
  readonly type = DELETE_CONTACT_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddContactAction implements Action {
  readonly type = ADD_CONTACT;

  constructor(public payload: ContactForm) {

  }
}

export class AddContactSuccessAction implements Action {
  readonly type = ADD_CONTACT_SUCCESS;

  constructor(public payload: Contact) {

  }
}

export class UpdateContactAction implements Action {
  readonly type = UPDATE_CONTACT;

  constructor(public payload: Contact) {

  }
}

export class UpdateContactSuccessAction implements Action {
  readonly type = UPDATE_CONTACT_SUCCESS;

  constructor(public payload: Contact) {

  }
}

export class FilterContactAction implements Action {
  readonly type = FILTER_CONTACT;

  constructor(public payload: string) {

  }
}

export class FilterContactSuccessAction implements Action {
  readonly type = FILTER_CONTACT_SUCCESS;

  constructor(public payload: Contact[]) {

  }
}


export type Actions
  = LoadContactsAction
  | LoadContactsSuccessAction

  | LoadContactAction
  | LoadContactSuccessAction

  | DeleteContactAction
  | DeleteContactSuccessAction

  | AddContactAction
  | AddContactSuccessAction

  | UpdateContactAction
  | UpdateContactSuccessAction

  | FilterContactAction
  | FilterContactSuccessAction;


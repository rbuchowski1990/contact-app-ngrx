import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/index';
import * as contactActions from '../../store/actions/contact.actions';
import {ContactState} from '@models/contact-state';
import {Contact} from '@models/contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsPageComponent implements OnInit {

  public searchValue = '';
  public contacts$: Observable<ContactState>;


  constructor(private store: Store<ContactState>) {
    this.contacts$ = this.store.pipe(
      select((state: ContactState) => state));
  }

  ngOnInit() {
    this.getContacts();
  }

  public onInputChange() {
    this.store.dispatch(new contactActions.FilterContactAction(this.searchValue));
  }


  public getContacts() {
    this.store.dispatch(new contactActions.LoadContactsAction());
  }

  public deleteContact(contact: Contact) {
    this.store.dispatch(new contactActions.DeleteContactAction(contact.uuid));
  }
}

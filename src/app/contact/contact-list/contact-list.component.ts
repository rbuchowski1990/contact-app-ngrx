import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/index';
import * as contactActions from './../../actions/contact.actions';
import {AppState} from '@models/app-state';
import {ContactService} from '../contact.service';
import set = Reflect.set;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  public contacts$: Observable<any>;

  constructor(private store: Store<AppState>, private contactService: ContactService) {
    this.contacts$ = this.store.pipe(select((state: AppState) => state.contacts));
    this.contacts$.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.getContacts();

    setTimeout(function () {
      this.deleteContact();
    }.bind(this), 3000);
  }

  public getContacts() {
    this.store.dispatch(new contactActions.LoadContactsAction());
  }

  public deleteContact() {
    this.store.dispatch(new contactActions.DeleteContactAction('2'));
  }

}

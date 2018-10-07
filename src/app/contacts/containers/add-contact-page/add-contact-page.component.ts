import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContactForm} from '@models/contact';
import {ContactState} from '@models/contact-state';
import {Store} from '@ngrx/store';
import * as contactActions from '../../store/actions/contact.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact-page',
  templateUrl: './add-contact-page.component.html',
  styleUrls: ['./add-contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddContactPageComponent implements OnInit {

  public contact: ContactForm = {
    companyName: '',
    nip: null,
    regon: null,
    address: {
      street: '',
      streetNumber: '',
      postalCode: '',
      city: ''
    },
    email: '',
    phoneNumber: null
  };


  constructor(private store: Store<ContactState>, private router: Router) {
  }

  ngOnInit() {
  }

  public onFormSubmitted(contact: ContactForm) {
    this.store.dispatch(new contactActions.AddContactAction(contact));
    this.router.navigate(['/contacts']);
  }

}

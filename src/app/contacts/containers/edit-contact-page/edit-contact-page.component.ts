import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactState} from '@models/contact-state';
import {select, Store} from '@ngrx/store';
import * as contactActions from '../../store/actions/contact.actions';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact-page',
  templateUrl: './edit-contact-page.component.html',
  styleUrls: ['./edit-contact-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditContactPageComponent implements OnInit {

  public contact$;

  constructor(private route: ActivatedRoute, private store: Store<ContactState>, private router: Router) {

    this.contact$ = route.params
      .pipe(
        map((params) => {
          return this.store.dispatch(new contactActions.LoadContactAction(params.id));
        }),
        switchMap((data) => {
          return this.contact$ = this.store.pipe(
            select((state: ContactState) => state.contacts),
            map(element => element[0]));
        })
      );

  }

  ngOnInit() {
  }

  public onFormSubmitted(contact) {
    this.store.dispatch(new contactActions.UpdateContactAction(contact));
    this.router.navigate(['/contacts']);
  }
}

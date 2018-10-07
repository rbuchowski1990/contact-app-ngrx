import {NgModule} from '@angular/core';
import {ContactService} from './contact.service';
import {StoreModule} from '@ngrx/store';
import {contactReducer} from './store/reducers/contact.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ContactEffects} from './store/effects/contact.effects';
import {ContactsPageComponent} from './containers/contacts-page/contacts-page.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { ContactsTableComponent } from './components/contacts-table/contacts-table.component';
import { AddContactPageComponent } from './containers/add-contact-page/add-contact-page.component';
import {ContactRoutingModule} from './contact.routing.module';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {EditContactPageComponent} from './containers/edit-contact-page/edit-contact-page.component';

@NgModule({
  declarations: [
    ContactsPageComponent,
    ContactsTableComponent,
    AddContactPageComponent,
    EditContactPageComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    StoreModule.forFeature('contacts', contactReducer),
    EffectsModule.forFeature([ContactEffects]),
    SharedModule
  ],
  providers: [ContactService]
})
export class ContactModule {
}

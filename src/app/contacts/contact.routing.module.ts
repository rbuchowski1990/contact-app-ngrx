import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsPageComponent} from './containers/contacts-page/contacts-page.component';
import {AddContactPageComponent} from './containers/add-contact-page/add-contact-page.component';
import {EditContactPageComponent} from './containers/edit-contact-page/edit-contact-page.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsPageComponent
  },
  {
    path: 'contacts/add',
    component: AddContactPageComponent
  },
  {
    path: 'contact/:id',
    component: EditContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {
}

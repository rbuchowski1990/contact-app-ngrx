import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {contactReducer} from './reducers/contact.reducer';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {DataRequestsService} from './core/data-requests.service';
import {ContactService} from './contact/contact.service';
import {HttpClientModule} from '@angular/common/http';
import {fakeBackendProvider} from './core/fake-backend.interceptor';
import {EffectsModule} from '@ngrx/effects';
import {ContactEffects} from './effects/contact.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({contacts: contactReducer}),
    HttpClientModule,
    EffectsModule.forRoot([ContactEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [DataRequestsService, ContactService, fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}

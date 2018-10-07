import {Injectable} from '@angular/core';
import {
  HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {dematerialize, materialize, mergeMap} from 'rxjs/internal/operators';
import {Contact} from '../models/contact';
import {ApiUrl} from '@config/server';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  public contacts: Contact[] = [
    {
      uuid: '1538924987755',
      companyName: 'Jacksonville Bancorp Inc.',
      regon: 361339191,
      nip: 7393831231,
      address: {
        street: 'Woloska',
        streetNumber: '12/33',
        postalCode: '02-313',
        city: 'Warszawa'
      },
      email: 'test@wp.pl',
      phoneNumber: 600123312
    },
    {
      uuid: '1538924995642',
      companyName: 'The Bancorp, Inc',
      regon: 313391091,
      nip: 7393831231,
      address: {
        street: 'Testowa',
        streetNumber: '122/33',
        postalCode: '02-313',
        city: 'Warszawa'
      },
      email: 'test@wp.pl',
      phoneNumber: 600123312
    },
    {
      uuid: '1538925004802',
      companyName: 'Groupon, Inc.',
      regon: 361331091,
      nip: 7393831231,
      address: {
        street: 'Szczesliwicka',
        streetNumber: '12/33',
        postalCode: '02-313',
        city: 'Warszawa'
      },
      email: 'test@wp.pl',
      phoneNumber: 600123312
    },
    {
      uuid: '1538925012389',
      companyName: 'General Motors Company',
      regon: 361339101,
      nip: 7393831231,
      address: {
        street: 'kolejowa',
        streetNumber: '12/33',
        postalCode: '02-313',
        city: 'Warszawa'
      },
      email: 'test@wp.pl',
      phoneNumber: 600123312
    }
  ];

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(
        mergeMap(() => {
          const urlSegments: string[] = request.url.split('/');

          if (request.url.endsWith(`${ApiUrl}/contacts`) && request.method === 'GET') {

            return of(new HttpResponse({status: 200, body: this.contacts}));
          } else if (request.url.includes(`${ApiUrl}/contacts?filter=`) && request.method === 'GET') {


            return of(new HttpResponse({
              status: 200,
              body: this.filterByString(request.params.get('filter'))
            }));
          } else if (request.method === 'GET') {


            return of(new HttpResponse({
              status: 200,
              body: this.contacts.filter(el => el.uuid === urlSegments[urlSegments.length - 1])[0]
            }));
          } else if (request.method === 'DELETE') {

            const elementToRemove = this.contacts.filter(el => el.uuid === urlSegments[urlSegments.length - 1])[0];
            this.contacts.splice(this.contacts.indexOf(elementToRemove), 1);

            return of(new HttpResponse({status: 200, body: elementToRemove}));
          } else if (request.method === 'POST') {

            const elementToAdd = Object.assign({uuid: (+new Date()).toString()}, request.body);


            this.contacts = [...this.contacts, elementToAdd];

            return of(new HttpResponse({status: 200, body: elementToAdd}));
          } else if (request.method === 'PUT') {

            const urlUuid = urlSegments[urlSegments.length - 1];
            this.contacts.map((element) => {
              if (element.uuid === urlUuid) {
                return Object.assign(element, request.body);
              }
              return element;
            });
            return of(new HttpResponse({
              status: 200,
              body: this.contacts.filter(el => el.uuid === urlUuid)[0]
            }));
          }


          return next.handle(request);

        }),
        materialize(),
        dematerialize()
      );
  }


  private filterByString(searchValue: string) {
    const searchString = searchValue.toLocaleLowerCase().trim();

    return this.contacts.filter(
      element =>
        element.uuid.toLocaleLowerCase().includes(searchString) ||
        element.companyName.toLocaleLowerCase().includes(searchString) ||
        element.regon.toString().toLocaleLowerCase().includes(searchString) ||
        element.nip.toString().toLocaleLowerCase().includes(searchString) ||
        element.address.street.toString().toLocaleLowerCase().includes(searchString) ||
        element.address.streetNumber.toString().toLocaleLowerCase().includes(searchString) ||
        element.address.postalCode.toString().toLocaleLowerCase().includes(searchString) ||
        element.address.city.toString().toLocaleLowerCase().includes(searchString) ||
        element.email.toString().toLocaleLowerCase().includes(searchString) ||
        element.phoneNumber.toString().toLocaleLowerCase().includes(searchString)
    );
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

import {Injectable} from '@angular/core';
import {
  HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/internal/operators';
import {Contact} from '../models/contact';
import {ApiUrl} from '@config/server';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  public contacts: Contact[] = [
    {
      uuid: '1',
      companyName: 'test',
      regon: 123123123,
      nip: 7393844424
    },
    {
      uuid: '2',
      companyName: 'test2',
      regon: 123123123,
      nip: 7393844424
    },
    {
      uuid: '3',
      companyName: 'test3',
      regon: 123123123,
      nip: 7393844424
    },
    {
      uuid: '4',
      companyName: 'test4',
      regon: 123123123,
      nip: 7393844424
    }
  ];

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(
        mergeMap(() => {
          const urlSegments: string[] = request.url.split('/');

          if (request.method === 'GET') {

            return of(new HttpResponse({status: 200, body: this.contacts}));
          } else if (request.method === 'DELETE') {

            const elementToRemove = this.contacts.filter(el => el.uuid === urlSegments[urlSegments.length - 1])[0];
            this.contacts.splice(this.contacts.indexOf(elementToRemove), 1);

            return of(new HttpResponse({status: 200, body: elementToRemove}));
          } else if (request.method === 'POST') {

            const elementToAdd = Object.assign({uuid: +new Date()}, request.body);

            this.contacts.push(elementToAdd);

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
        delay(500),
        dematerialize()
      );
  }

}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

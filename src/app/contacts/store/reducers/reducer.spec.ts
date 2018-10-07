import * as contactActions from '../../store/actions/contact.actions';
import {contactReducer} from './contact.reducer';


describe(`deleteContactAction`, () => {
  it(`should delete a contact`, () => {

    const currentState = [
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

    const expectedResult = [
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
      }
    ];

    const action = new contactActions.DeleteContactSuccessAction('1538925012389');
    const result = contactReducer(currentState, action);

    expect(result).toEqual(expectedResult);

  });
});

describe(`addContactAction`, () => {
  it(`should add new contact`, () => {
    const contactToAdd = {
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
    };

    const currentState = [
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
      }
    ];

    const expectedResult = [
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

    const action = new contactActions.AddContactSuccessAction(contactToAdd);
    const result = contactReducer(currentState, action);

    expect(result).toEqual(expectedResult);
  });
});


describe(`updateContactAction`, () => {
  it(`should update Contact`, () => {
    const updatedContact = {
      uuid: '1538925012389',
      companyName: 'General Motors Company - test',
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
    };

    const currentState = [{
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
    }];

    const expectedResult = [{
      uuid: '1538925012389',
      companyName: 'General Motors Company - test',
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
    }];

    const action = new contactActions.UpdateContactSuccessAction(updatedContact);
    const result = contactReducer(currentState, action);

    expect(result).toEqual(expectedResult);
  });
});


describe(`loadContactAction`, () => {
  it(`should load Contact`, () => {

    const reuqestedContact = {
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
    };

    const currentState = [
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

    const expectedResult = [{
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
    }];

    const action = new contactActions.LoadContactSuccessAction(reuqestedContact);
    const result = contactReducer(currentState, action);

    expect(result).toEqual(expectedResult);
  });
});

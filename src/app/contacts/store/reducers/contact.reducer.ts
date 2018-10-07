import * as contactActions from '../actions/contact.actions';

export function contactReducer(state = [], action: contactActions.Actions) {
  switch (action.type) {
    case contactActions.LOAD_CONTACTS_SUCCESS: {
      return action.payload;
    }
    case contactActions.LOAD_CONTACT_SUCCESS: {
      return [action.payload];
    }
    case contactActions.DELETE_CONTACT_SUCCESS: {
      return state.filter(contact => contact.uuid !== action.payload);
    }
    case contactActions.ADD_CONTACT_SUCCESS: {
      return [...state, action.payload];
    }
    case contactActions.UPDATE_CONTACT_SUCCESS: {
      return [action.payload];
    }
    case contactActions.FILTER_CONTACT_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

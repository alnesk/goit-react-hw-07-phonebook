import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './reducers/filterSlice';
import { contactsReducer } from './reducers/contactsSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  }
});


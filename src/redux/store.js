import { configureStore, createSelector } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});

//Selectors fu

export const selectContactsState = (state) => state.contacts;

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);

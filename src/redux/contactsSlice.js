import { createSlice } from "@reduxjs/toolkit";

export const INITAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITAL_STATE.contacts,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const contactIndex = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(contactIndex, 1);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

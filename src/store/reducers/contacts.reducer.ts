import { ContactInfo, Contact } from "@/types/contact.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactInfo>) => {
      state.contacts.push({
        id: new Date().getTime().toString(),
        createdAt: new Date().toISOString(),
        ...action.payload,
      });
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      state.contacts[index] = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = slice.actions;

export default slice.reducer;

import { create } from "zustand";
import type { ContactsState } from "../interface";
import { INITIAL_CONTACTS } from "../constants/constants";

export const useContactsStore = create<ContactsState>((set) => ({
  contacts: INITIAL_CONTACTS,

  addContact: (name) =>
    set((state) => ({
      contacts: [...state.contacts, { id: Date.now(), name }],
    })),

  removeContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((c) => c.id !== id),
    })),
}));

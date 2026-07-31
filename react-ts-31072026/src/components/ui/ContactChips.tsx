import { Mail, Phone, Plus, Search, UserRound, X } from "lucide-react";
import { useMemo, useState } from "react";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  initials: string;
};

const contacts: Contact[] = [
  {
    id: 1,
    name: "Anil Sharma",
    email: "anil@example.com",
    phone: "+91 98765 43210",
    initials: "AS",
  },
  {
    id: 2,
    name: "Imran Khan",
    email: "imran@example.com",
    phone: "+91 98765 43211",
    initials: "IK",
  },
  {
    id: 3,
    name: "Krishna Kumar",
    email: "krishna@example.com",
    phone: "+91 98765 43212",
    initials: "KP",
  },
  {
    id: 4,
    name: "Govind Shelar",
    email: "govind@example.com",
    phone: "+91 98765 43213",
    initials: "GM",
  },
  {
    id: 5,
    name: "Sunil Balan",
    email: "sunil@example.com",
    phone: "+91 98765 43214",
    initials: "SV",
  },
];

export default function ContactChips() {
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([
    contacts[0],
    contacts[2],
  ]);

  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    const search = searchValue.trim().toLowerCase();

    return contacts.filter((contact) => {
      const isAlreadySelected = selectedContacts.some(
        (selectedContact) => selectedContact.id === contact.id,
      );

      const matchesSearch =
        contact.name.toLowerCase().includes(search) ||
        contact.email.toLowerCase().includes(search);

      return !isAlreadySelected && matchesSearch;
    });
  }, [searchValue, selectedContacts]);

  const addContact = (contact: Contact) => {
    setSelectedContacts((currentContacts) => [...currentContacts, contact]);

    setSearchValue("");
    setIsOpen(false);
  };

  const removeContact = (contactId: number) => {
    setSelectedContacts((currentContacts) =>
      currentContacts.filter((contact) => contact.id !== contactId),
    );
  };

  return (
    <section className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg desktop-sm:p-7">
      <header className="mb-6">
        <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
          Contact manager
        </p>

        <h1 className="mt-2 font-arialnb text-32 font-bold text-secondary">
          Contact Chips
        </h1>

        <p className="mt-2 font-montserrat text-14 text-secondary/70">
          Select, display, and remove contacts using reusable chips.
        </p>
      </header>

      <div className="relative">
        <label
          htmlFor="contact-search"
          className="mb-2 block font-montserrat text-12 font-semibold uppercase tracking-[0.08em] text-secondary"
        >
          Add contacts
        </label>

        <div
          className="
            flex min-h-14 flex-wrap items-center gap-2
            rounded-2xl border border-slate-300 bg-white
            p-2 transition
            focus-within:border-primary
            focus-within:ring-4 focus-within:ring-primary/10
          "
        >
          {selectedContacts.map((contact) => (
            <div
              key={contact.id}
              className="
                group flex items-center gap-2 rounded-full
                border border-primary/20 bg-primary/10
                py-1.5 pl-1.5 pr-2
              "
            >
              <span
                className="
                  flex h-8 w-8 shrink-0 items-center justify-center
                  rounded-full bg-primary font-arialnb
                  text-12 font-bold text-white
                "
              >
                {contact.initials}
              </span>

              <div className="max-w-36 min-w-0">
                <p className="truncate font-montserrat text-12 font-semibold text-secondary">
                  {contact.name}
                </p>

                <p className="truncate font-montserrat text-[10px] text-secondary/60">
                  {contact.email}
                </p>
              </div>

              <button
                type="button"
                aria-label={`Remove ${contact.name}`}
                onClick={() => removeContact(contact.id)}
                className="
                  flex h-7 w-7 shrink-0 items-center justify-center
                  rounded-full text-secondary/60 transition
                  hover:bg-red-100 hover:text-red-600
                  focus:outline-none focus:ring-2 focus:ring-red-200
                "
              >
                <X size={15} aria-hidden="true" />
              </button>
            </div>
          ))}

          <div className="relative min-w-48 flex-1">
            <Search
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-secondary/40"
            />

            <input
              id="contact-search"
              type="text"
              value={searchValue}
              placeholder="Search contacts..."
              onFocus={() => setIsOpen(true)}
              onChange={(event) => {
                setSearchValue(event.target.value);
                setIsOpen(true);
              }}
              className="
                h-10 w-full bg-transparent pl-9 pr-3
                font-montserrat text-14 text-slate-900
                outline-none placeholder:text-slate-400
              "
            />
          </div>
        </div>

        {isOpen && (
          <div
            className="
              absolute left-0 right-0 top-[calc(100%+8px)] z-50
              max-h-72 overflow-y-auto rounded-2xl
              border border-slate-200 bg-white p-2
              shadow-[0_20px_60px_rgba(15,23,42,0.16)]
            "
          >
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <button
                  key={contact.id}
                  type="button"
                  onClick={() => addContact(contact)}
                  className="
                    flex w-full items-center gap-3 rounded-xl
                    px-3 py-3 text-left transition
                    hover:bg-primary/5
                    focus:outline-none focus:ring-2 focus:ring-primary/20
                  "
                >
                  <span
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-full bg-primary/10 font-arialnb
                      text-14 font-bold text-primary
                    "
                  >
                    {contact.initials}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-montserrat text-14 font-semibold text-slate-900">
                      {contact.name}
                    </span>

                    <span className="mt-1 block truncate font-montserrat text-12 text-secondary/60">
                      {contact.email}
                    </span>
                  </span>

                  <Plus
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-primary"
                  />
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center">
                <UserRound
                  size={28}
                  aria-hidden="true"
                  className="mx-auto text-secondary/30"
                />

                <p className="mt-3 font-montserrat text-14 font-semibold text-secondary">
                  No contacts found
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-7 border-t border-slate-200 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-arialnb text-20 font-bold text-secondary">
            Selected contacts
          </h2>

          <span className="rounded-full bg-primary/10 px-3 py-1 font-montserrat text-12 font-semibold text-primary">
            {selectedContacts.length} selected
          </span>
        </div>

        <div className="space-y-3">
          {selectedContacts.map((contact) => (
            <article
              key={contact.id}
              className="
                flex flex-col gap-4 rounded-2xl border
                border-slate-200 bg-slate-50 p-4
                sm:flex-row sm:items-center
              "
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className="
                    flex h-11 w-11 shrink-0 items-center justify-center
                    rounded-full bg-primary font-arialnb
                    text-14 font-bold text-white
                  "
                >
                  {contact.initials}
                </span>

                <div className="min-w-0">
                  <h3 className="truncate font-montserrat text-14 font-semibold text-slate-900">
                    {contact.name}
                  </h3>

                  <p className="mt-1 truncate font-montserrat text-12 text-secondary/60">
                    {contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  aria-label={`Email ${contact.name}`}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl border border-slate-200 bg-white
                    text-secondary transition
                    hover:border-primary hover:text-primary
                  "
                >
                  <Mail size={17} aria-hidden="true" />
                </a>

                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    aria-label={`Call ${contact.name}`}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl border border-slate-200 bg-white
                      text-secondary transition
                      hover:border-primary hover:text-primary
                    "
                  >
                    <Phone size={17} aria-hidden="true" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => removeContact(contact.id)}
                  className="
                    flex h-10 items-center gap-2 rounded-xl
                    border border-red-200 bg-white px-3
                    font-montserrat text-12 font-semibold text-red-600
                    transition hover:bg-red-50
                  "
                >
                  <X size={16} aria-hidden="true" />
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

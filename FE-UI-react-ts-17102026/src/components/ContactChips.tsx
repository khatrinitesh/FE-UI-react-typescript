import { X, UserRound } from "lucide-react";

export interface Contact {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
}

interface ContactChipsProps {
  contacts: Contact[];
  onRemove?: (id: string) => void;
  className?: string;
}

const ContactChips = ({
  contacts,
  onRemove,
  className = "",
}: ContactChipsProps) => {
  return (
    <div
      className={`contact-chips flex flex-wrap items-center gap-2 ${className}`}
    >
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="contact-chips__item inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-2 pr-1.5 shadow-sm"
        >
          {contact.avatar ? (
            <img
              src={contact.avatar}
              alt=""
              className="h-7 w-7 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <UserRound size={16} />
            </span>
          )}
          <div className="min-w-0">
            <p className="max-w-36 truncate text-sm font-medium text-gray-800">
              {contact.name}
            </p>
            {contact.email && (
              <p className="max-w-36 truncate text-xs text-gray-500">
                {contact.email}
              </p>
            )}
          </div>
          {onRemove && (
            <button
              type="button"
              onClick={() => onRemove(contact.id)}
              aria-label={`Remove ${contact.name}`}
              className="rounded-full p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
            >
              <X size={15} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactChips;

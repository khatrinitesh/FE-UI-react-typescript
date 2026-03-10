import { useState } from "react";
import { useContactsStore } from "../../store/useContactsStore";
import { motion, AnimatePresence } from "framer-motion";

const ContactChips = () => {
  const { contacts, addContact, removeContact } = useContactsStore();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    addContact(input);
    setInput("");
  };
  return (
    <>
      <div className="max-w-md mx-auto space-y-4">
        {/* Chips */}
        <div className="flex flex-wrap gap-2 border p-3 rounded-lg bg-white">
          <AnimatePresence>
            {contacts.map((contact) => (
              <motion.div
                key={contact.id}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {contact.name}

                <button
                  onClick={() => removeContact(contact.id)}
                  className="text-blue-500 hover:text-red-500"
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            placeholder="Add contact..."
            className="flex-1 outline-none text-sm"
          />
        </div>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Add Contact
        </button>
      </div>
    </>
  );
};

export default ContactChips;

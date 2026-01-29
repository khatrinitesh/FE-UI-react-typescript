import { useEffect, useState } from "react";
import type { User } from "../interface/User";

interface Props {
  selectedUser: User | null;
  onSave: (user: User) => void;
}

const UserForm = ({ selectedUser, onSave }: Props) => {
  const [form, setForm] = useState<User>({ name: "", email: "" });

  useEffect(() => {
    if (selectedUser) setForm(selectedUser);
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border mb-4">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 mr-2"
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 mr-2"
      />
      <button className="bg-blue-500 text-white px-3 py-2">
        {form.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;

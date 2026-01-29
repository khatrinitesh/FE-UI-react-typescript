import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "./api/userService";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { User } from "./interface/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSave = async (user: User) => {
    if (user.id) {
      await updateUser(user.id, user);
    } else {
      await createUser(user);
    }
    setSelectedUser(null);
    fetchUsers();
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">React TS CRUD with Axios</h2>
        <UserForm selectedUser={selectedUser} onSave={handleSave} />
        <UserList
          users={users}
          onEdit={setSelectedUser}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;

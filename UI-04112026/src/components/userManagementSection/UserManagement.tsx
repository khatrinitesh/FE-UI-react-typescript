import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  createUser,
  deleteUser,
  fetchUsers,
  type User,
} from "../../servics/user.service";
import Button from "../common/Button";

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchUsers();
      setUsers(data);
    } catch {
      setError("Unable to fetch users.");
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      const newUser = await createUser({
        name: "John Doe",
        email: "john@example.com",
      });

      setUsers((prev) => [...prev, newUser]);
      toast.success("User created successfully!");
    } catch {
      toast.error("Unable to create user");
    }
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmed) return;

    try {
      await deleteUser(id);

      setUsers((prev) => prev.filter((user) => user.id !== id));
      toast.success("User deleted successfully!");
    } catch {
      toast.error("Unable to delete user");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">User Management</h1>

      {error && (
        <div
          role="alert"
          className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
        >
          <h2 className="font-semibold">API Error</h2>
          <p>{error}</p>
        </div>
      )}

      <div className="mb-6 flex gap-3">
        <Button loading={loading} onClick={loadUsers}>
          Refresh Users
        </Button>

        <Button variant="secondary" onClick={handleCreate}>
          Add User
        </Button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : (
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <Button variant="danger" onClick={() => handleDelete(user.id)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

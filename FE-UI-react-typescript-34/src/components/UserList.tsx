import type { User } from "../interface/User";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList = ({ users, onEdit, onDelete }: Props) => {
  return (
    <table className="border w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td className="border p-2">{u.name}</td>
            <td className="border p-2">{u.email}</td>
            <td className="border p-2 space-x-2">
              <button onClick={() => onEdit(u)} className="bg-yellow-400 px-2">
                Edit
              </button>
              <button
                onClick={() => onDelete(u.id!)}
                className="bg-red-500 text-white px-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;

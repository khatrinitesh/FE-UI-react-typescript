import { useEffect, useState } from "react";
import UserList from "../UserList";

type User = {
  id: number;
  name: string;
  email: string;
};

const UserContainer = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const API_USERS = import.meta.env.VITE_API_JSONPLACEHOLDER_USERS;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_USERS);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (error: any) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>User Management</h2>
      <UserList users={users} />
    </div>
  );
};

export default UserContainer;

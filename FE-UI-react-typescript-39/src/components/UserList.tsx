// user > id is 1 / name is 2 / email is 3
type User = {
  id: number;
  name: string;
  email: string;
};

// list props including with id, name and email
type UserListProps = {
  users: User[];
};

const UserList = ({ users }: UserListProps) => {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

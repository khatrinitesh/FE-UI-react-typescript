import { useVortexStore } from "../../logic-store-state-management/useVortexStore/useVortexStore";
import { ROLES } from "./components/vortexData";

const VortexComponent = () => {
  const { user, setUser, clearUser } = useVortexStore();
  return (
    <>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <p>Role: {user.role}</p>
          <button onClick={clearUser}>Logout</button>
        </>
      ) : (
        <button
          onClick={() =>
            setUser({ id: "1", name: "Jane Doe", role: ROLES.ADMIN })
          }
        >
          Login as Admin
        </button>
      )}
    </>
  );
};

export default VortexComponent;

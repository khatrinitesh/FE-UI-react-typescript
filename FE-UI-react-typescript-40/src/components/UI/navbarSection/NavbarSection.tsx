import { useNavStore } from "../../../store/useNavStore";

const NavbarSection = () => {
  const { toggle } = useNavStore();
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-black text-white">
      <h1 className="font-bold text-lg">Logo</h1>

      <button
        onClick={toggle}
        className="w-10 h-10 flex flex-col justify-center items-center space-y-1"
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
    </header>
  );
};

export default NavbarSection;

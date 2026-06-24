export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4">
      <p>
        © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}. All rights
        reserved.
      </p>
    </footer>
  );
}

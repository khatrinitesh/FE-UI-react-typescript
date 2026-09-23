export default function Footer() {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-black px-6 py-6">
      <div className="mx-auto max-w-7xl text-center text-sm text-white">© {currentFullYear} Company Name. All rights reserved.</div>
    </footer>
  );
}

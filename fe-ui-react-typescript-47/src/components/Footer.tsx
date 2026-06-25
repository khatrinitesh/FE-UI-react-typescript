export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-gray-500">
        ©MyApp. {currentYear} All rights reserved.
      </div>
    </footer>
  );
}

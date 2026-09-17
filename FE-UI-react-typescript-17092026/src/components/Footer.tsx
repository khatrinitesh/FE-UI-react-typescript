export function Footer() {
  return (
    <footer className="mt-20 bg-primary px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold">School Name</p>
        <p className="mt-2 text-sm text-white/70">© {new Date().getFullYear()} School Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

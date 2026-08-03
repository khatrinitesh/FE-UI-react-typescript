const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold">React Starter</h2>

            <p className="mt-4 text-gray-400">
              Modern React + TypeScript starter using Tailwind, TanStack Router,
              Query, Axios, Framer Motion and Zod.
            </p>
          </div>

          {/* Links */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

            <div className="flex gap-4">
              {/* <Github className="cursor-pointer" />
              <Facebook className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
              <Linkedin className="cursor-pointer" /> */}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-gray-400">
          © {year} React Starter. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

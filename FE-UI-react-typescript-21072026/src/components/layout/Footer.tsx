import { APP_NAME } from "../../constants/app.constants";


export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm text-white font-poppins-regular">
          © {new Date().getFullYear()} {APP_NAME}. All rights
          reserved.
        </p>

        <p className="text-sm text-white font-poppins-semibold">Built with React and TypeScript.</p>
      </div>
    </footer>
  );
}
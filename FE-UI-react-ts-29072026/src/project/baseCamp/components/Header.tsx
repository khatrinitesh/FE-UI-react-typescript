export default function Header() {
  return (
    <header className="bg-red-600 h-16 flex items-center justify-between px-10">
      <h1 className="text-white text-4xl font-serif">Ogilvy</h1>

      <div className="bg-red-500 p-4 rounded-b-xl">
        <div className="bg-slate-900 rounded-xl w-20 h-20 flex items-center justify-center">
          <div className="space-y-2">
            <div className="w-10 h-2 bg-red-500 rotate-45 rounded-full"></div>
            <div className="w-10 h-2 bg-red-500 rotate-45 rounded-full"></div>
          </div>
        </div>

        <p className="text-white text-center mt-2 font-semibold">Logotype</p>
      </div>
    </header>
  );
}

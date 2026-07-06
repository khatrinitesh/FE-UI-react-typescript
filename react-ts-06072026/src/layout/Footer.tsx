export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto py-6 px-4 text-center">
        © {new Date().getFullYear()} MyApp. All Rights Reserved.
      </div>
    </footer>
  );
};


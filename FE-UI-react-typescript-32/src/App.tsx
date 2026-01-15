import "./App.css";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <>
      <div className="relative w-full h-screen">
        <BlogCard />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Banner</h1>
        </div>
      </div>
    </>
  );
}

export default App;

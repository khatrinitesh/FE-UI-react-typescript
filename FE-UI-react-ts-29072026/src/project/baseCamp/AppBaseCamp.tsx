import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TeamTabs from "./components/TeamTabs";

export default function AppBaseCamp() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />

      <div className="px-8 py-6">
        <div className="rounded-[40px] bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-12">
            {/* Left */}

            <div className="col-span-9 p-10">
              <h1 className="text-5xl font-black">
                <span className="text-red-600">C.</span> VOTE
              </h1>

              <p className="mt-6 text-2xl font-medium">
                Pick a pillar. Write the boldest Idea you can in
                <span className="text-red-500 font-bold"> 30 </span>
                seconds.
              </p>

              <div className="mt-8">
                <TeamTabs />
              </div>

              <div className="mt-10">
                <Gallery />
              </div>
            </div>

            {/* Right */}

            <div className="col-span-3 bg-linear-to-b from-white to-red-400 p-10">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ThumbsUp } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-5xl font-black text-slate-700">WORKSHOP 1</h2>

      <h3 className="text-3xl font-bold mb-8">Pillar</h3>

      <p className="text-lg leading-9 text-gray-800">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <p className="mt-8 text-lg leading-9 text-gray-800">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>

      <div className="mt-auto flex justify-center">
        <button className="bg-red-600 hover:bg-red-700 transition text-white rounded-full px-14 py-5 shadow-xl flex items-center gap-3">
          <ThumbsUp size={28} />
        </button>
      </div>
    </div>
  );
}

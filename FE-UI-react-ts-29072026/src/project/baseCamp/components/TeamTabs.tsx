const teams = ["Team A", "Team B", "Team C", "Team D"];

export default function TeamTabs() {
  return (
    <div className="inline-flex rounded-full bg-white shadow-lg p-2">
      {teams.map((team, i) => (
        <button
          key={team}
          className={`px-6 py-2 font-medium ${
            i === 2 ? "text-red-600" : "text-gray-600"
          }`}
        >
          {team}
        </button>
      ))}

      <button className="bg-gray-100 rounded-full w-10 h-10 text-xl">→</button>
    </div>
  );
}

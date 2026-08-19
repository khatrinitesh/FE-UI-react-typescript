import { GitHubCalendar } from "react-github-calendar";

export default function ReactGithubCalendarSection() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-center text-4xl font-bold">
          GitHub Contributions
        </h1>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <GitHubCalendar
            username="khatrinitesh"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
}

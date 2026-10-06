import MotionBox from "../components/common/MotionBox"


const items = [
  {
    title: "For Students",
    description:
      "Access courses, attendance, assignments, results and important college updates from one place.",
  },
  {
    title: "For Teachers",
    description:
      "Manage classes, students, assignments, attendance and academic progress efficiently.",
  },
  {
    title: "Simple Experience",
    description:
      "A clean and responsive interface designed to keep everyday college tasks simple.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <MotionBox className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
              About us
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              A simpler way to manage college life.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Our platform connects students and teachers through one simple
              system for academics, communication and everyday college
              activities.
            </p>
          </MotionBox>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((item, index) => (
              <MotionBox
                key={item.title}
                delay={index * 0.06}
                className="rounded-2xl border border-zinc-200 bg-white p-7"
              >
                <h2 className="text-xl font-semibold text-zinc-950">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-zinc-600">
                  {item.description}
                </p>
              </MotionBox>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <MotionBox className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built around students and teachers
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Instead of complicated systems and disconnected tools, the
              platform keeps important college information organized and easy
              to access.
            </p>
          </MotionBox>
        </div>
      </section>
    </>
  )
}
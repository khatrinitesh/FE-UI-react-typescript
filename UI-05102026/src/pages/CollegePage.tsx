import {
    ArrowLeft,
    BookOpen,
    GraduationCap,
    MapPin,
    Users,
} from "lucide-react"
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router"
import MotionBox from "../components/common/MotionBox"
import Button from "../components/ui/Button"



const facilities = [
  "Digital Library",
  "Computer Labs",
  "Science Laboratories",
  "Sports Facilities",
  "Student Activity Center",
]

export default function CollegePage() {
  const { collegeId } = useParams()

  const { pathname } = useLocation()

  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <MotionBox className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
              College
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Explore our college.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              Discover academic programs, student facilities, campus life and
              everything you need to know about the college.
            </p>
          </MotionBox>
        </div>
      </section>

      {/* College information */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MotionBox className="rounded-2xl border border-zinc-200 bg-white p-6">
              <GraduationCap
                size={24}
                className="text-zinc-950"
              />

              <p className="mt-5 text-sm text-zinc-500">
                College ID
              </p>

              <h2 className="mt-1 text-xl font-semibold text-zinc-950">
                {collegeId ?? "N/A"}
              </h2>
            </MotionBox>

            <MotionBox
              delay={0.05}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <BookOpen
                size={24}
                className="text-zinc-950"
              />

              <p className="mt-5 text-sm text-zinc-500">
                Programs
              </p>

              <h2 className="mt-1 text-xl font-semibold text-zinc-950">
                24+
              </h2>
            </MotionBox>

            <MotionBox
              delay={0.1}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <Users
                size={24}
                className="text-zinc-950"
              />

              <p className="mt-5 text-sm text-zinc-500">
                Students
              </p>

              <h2 className="mt-1 text-xl font-semibold text-zinc-950">
                5,000+
              </h2>
            </MotionBox>

            <MotionBox
              delay={0.15}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <MapPin
                size={24}
                className="text-zinc-950"
              />

              <p className="mt-5 text-sm text-zinc-500">
                Campus
              </p>

              <h2 className="mt-1 text-xl font-semibold text-zinc-950">
                Main Campus
              </h2>
            </MotionBox>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-zinc-950 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <MotionBox>
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
              About the college
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Learn, grow and build your future.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Our college provides a supportive academic environment where
              students can develop practical skills, explore new opportunities
              and prepare for their future careers.
            </p>
          </MotionBox>

          <MotionBox
            delay={0.08}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7"
          >
            <h3 className="text-xl font-semibold">
              Current route
            </h3>

            <p className="mt-3 break-all text-zinc-400">
              {pathname}
            </p>

            <p className="mt-6 text-sm text-zinc-500">
              Route parameter
            </p>

            <p className="mt-1 font-medium text-white">
              collegeId: {collegeId ?? "Not available"}
            </p>
          </MotionBox>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <MotionBox className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Facilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
              Everything students need.
            </h2>
          </MotionBox>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <MotionBox
                key={facility}
                delay={index * 0.05}
                className="rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <p className="font-medium text-zinc-950">
                  {facility}
                </p>
              </MotionBox>
            ))}
          </div>

          <MotionBox
            delay={0.1}
            className="mt-12"
          >
            <Button
              variant="outline"
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
              onClick={() => navigate(-1)}
            >
              Go back
            </Button>
          </MotionBox>
        </div>
      </section>
    </>
  )
}
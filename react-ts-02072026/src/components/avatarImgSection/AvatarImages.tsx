import { motion } from "framer-motion"

type Avatar = {
  id: number
  name: string
  role: string
  image: string
}

const avatars: Avatar[] = [
  {
    id: 1,
    name: "Nitesh",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Pamisha",
    role: "UI Designer",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Koushik",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=52",
  },
]

export default function AvatarImages() {
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-12 text-white">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Team Avatars
      </h1>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {avatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center shadow-xl backdrop-blur-md"
          >
            <motion.img
              src={avatar.image}
              alt={avatar.name}
              whileHover={{ rotate: 4, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="mx-auto h-28 w-28 rounded-full border-4 border-white/20 object-cover shadow-lg"
            />

            <h2 className="mt-5 text-xl font-semibold">
              {avatar.name}
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              {avatar.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
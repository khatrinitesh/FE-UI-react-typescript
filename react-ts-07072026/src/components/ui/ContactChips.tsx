import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaGithub } from 'react-icons/fa';

// interface
interface ContactChip {
  id: number
  label: string
  value: string
  icon: React.ElementType
  href?: string
}

// constants
const contactChips: ContactChip[] = [
  {
    id: 1,
    label: "Email",
    value: "hello@example.com",
    icon: Mail,
    href: "mailto:hello@example.com",
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
    href: "tel:+919876543210",
  },
  {
    id: 3,
    label: "Location",
    value: "Mumbai, India",
    icon: MapPin,
  },
  {
    id: 4,
    label: "LinkedIn",
    value: "LinkedIn",
    icon: FaFacebook,
    href: "https://linkedin.com",
  },
  {
    id: 5,
    label: "GitHub",
    value: "GitHub",
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    id: 6,
    label: "Website",
    value: "Portfolio",
    icon: FaGithub,
    href: "https://www.facebook.com",
  },
]

export default function ContactChips() {
  return (
    <section className="min-h-screen bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            Contact
          </p>

          <h1 className="text-4xl font-black md:text-6xl">
            Let&apos;s Connect
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Quick contact chips with smooth hover animation, icons, and links.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {contactChips.map((item, index) => {
            const Icon = item.icon

            const chipContent = (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:border-red-400/50 hover:bg-red-500/10"
              >
                <span className="absolute inset-0 -z-10 bg-linear-to-r from-red-500/0 via-red-500/10 to-pink-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-red-400 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                  <Icon size={18} />
                </span>

                <span className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>

                  <span className="text-sm font-bold text-white">
                    {item.value}
                  </span>
                </span>
              </motion.div>
            )

            if (item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {chipContent}
                </a>
              )
            }

            return <div key={item.id}>{chipContent}</div>
          })}
        </div>
      </div>
    </section>
  )
}
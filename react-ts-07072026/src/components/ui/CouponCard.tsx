import { motion } from "framer-motion"
import { Copy, Gift, Sparkles } from "lucide-react"
import { useState } from "react"

interface CouponCardProps {
  title: string
  description: string
  code: string
  discount: string
  expiryDate: string
}

export default function CouponCard({
  title,
  description,
  code,
  discount,
  expiryDate,
}: CouponCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 p-[1px] shadow-2xl"
    >
      <div className="relative overflow-hidden rounded-3xl bg-white p-6">
        {/* Left cut */}
        <span className="absolute left-0 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100" />

        {/* Right cut */}
        <span className="absolute right-0 top-1/2 size-8 -translate-y-1/2 translate-x-1/2 rounded-full bg-slate-100" />

        {/* Top decoration */}
        <div className="absolute right-4 top-4 rounded-full bg-red-50 p-3 text-red-500">
          <Gift size={22} />
        </div>

        <div className="mb-5 flex items-center gap-2">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-600">
            Limited Offer
          </span>

          <Sparkles size={16} className="text-orange-400" />
        </div>

        <h2 className="text-2xl font-black text-slate-950">{title}</h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>

        <div className="my-6 border-t border-dashed border-slate-300" />

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Discount
            </p>
            <h3 className="mt-1 text-4xl font-black text-red-500">
              {discount}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-2xl border border-dashed border-red-300 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-100"
          >
            <span>{code}</span>
            <Copy size={16} />
          </button>
        </div>

        <p className="mt-5 text-xs font-medium text-slate-400">
          Valid till: {expiryDate}
        </p>

        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white shadow-lg"
          >
            Coupon copied!
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
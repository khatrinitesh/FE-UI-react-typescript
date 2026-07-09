import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '../components/common/Button'

import IteratorReference from '../components/ui/JSReference/IteratorReference'
import { APP_DESCRIPTION } from '../constants/app.constants'
import { ROUTES } from '../constants/routes.constants'
import { ASSETS } from '../utils/assets'


const options = [
  { id: 1, label: "React" },
  { id: 2, label: "TypeScript" },
  { id: 3, label: "Tailwind CSS" },
  { id: 4, label: "Framer Motion" },
]



  const plans = [
    {
      label: "Basic Plan",
      value: "basic",
      description: "Good for small projects",
    },
    {
      label: "Pro Plan",
      value: "pro",
      description: "Best for growing teams",
    },
    {
      label: "Enterprise Plan",
      value: "enterprise",
      description: "Advanced features for companies",
    },
  ]

  const roleOptions = [
  {
    label: "Frontend Developer",
    value: "frontend",
  },
  {
    label: "Backend Developer",
    value: "backend",
  },
  {
    label: "Full Stack Developer",
    value: "fullstack",
  },
  {
    label: "UI/UX Designer",
    value: "designer",
  },
]

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
    const [selected, setSelected] = useState<number[]>([])
     const [selectedPlan, setSelectedPlan] = useState("basic")
      const [role, setRole] = useState("")


  const handleChange = (id: number) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    )
  }
  return (
    <section className="grid items-center gap-10 py-10 md:grid-cols-[1fr_420px]">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Home page</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
          React TypeScript Frontend Starter
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{APP_DESCRIPTION}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={ROUTES.product}>
            <Button type="button">View products</Button>
          </Link>
          <Link to={ROUTES.contact}>
            <Button type="button" variant="secondary">Contact us</Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="rounded-4xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900"
      >
        <img src={ASSETS.images.hero} alt="Frontend illustration" className="w-full" />
      </motion.div>
      <IteratorReference/>
      {/* <DateReference/>
      <JavaScriptTypesReference/>
      <BigIntReference/> */}
      {/* <ArrayReference/>
      <CutoutText/>
        <CustomSelect
          label="Select Role"
          placeholder="Choose your role"
          options={roleOptions}
          value={role}
          onChange={setRole}
        />
            {role && (
          <p className="mt-4 text-sm text-slate-600">
            Selected value: <span className="font-semibold">{role}</span>
          </p>
        )}
      <CustomScrollbar/>
         <CustomRadio
          name="plan"
          options={plans}
          selectedValue={selectedPlan}
          onChange={setSelectedPlan}
        />

        <p className="mt-6 rounded-xl bg-slate-100 p-4 text-sm font-medium text-slate-700">
          Selected Value:{" "}
          <span className="font-bold text-red-600">{selectedPlan}</span>
        </p>
      <CustomFileUpload/>
       <ZoomImage
      src={ASSETS.images.hero}
      alt="Hero"
    />
      <div className="space-y-3">
        {options.map((option) => (
          <CustomCheckbox
            key={option.id}
            label={option.label}
            checked={selected.includes(option.id)}
            onChange={() => handleChange(option.id)}
          />
        ))}
      </div>
    <Cursor/>
       <CouponCard
        title="Mega Sale Coupon"
        description="Use this coupon code and get an instant discount on your next purchase."
        code="SAVE50"
        discount="50%"
        expiryDate="31 July 2026"
      />
     
      <CountdownTimer targetDate="2026-12-31T23:59:59" />
       <CopyToClipboard text="https://example.com/frontend-developer" />
      <ContainerScroll/>
      <ContactChips/>
      <ComparisonTable/>
      <ComingSoon/>
      <ColorfulText/>
      <ColorPicker/> */}
      {/* <Sidebar/> */}
    </section>  
  )
}

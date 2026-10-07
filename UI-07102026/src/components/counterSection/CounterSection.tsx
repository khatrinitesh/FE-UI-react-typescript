

const stats = [
  {
    id: 1,
    label: 'Users',
    value: 12500,
  },
  {
    id: 2,
    label: 'Projects',
    value: 350,
  },
  {
    id: 3,
    label: 'Conversion',
    value: 89,
    suffix: '%',
  },
]

function StatValue({ value, suffix }: { value: number; suffix?: string }) {
  const { value: count } = useCountUp({
    isCounting: true,
    end: value,
    duration: 2,
  })

  return (
    <>
      {Number(count).toLocaleString()}
      {suffix}
    </>
  )
}

export function CounterSection() {
  return (
         <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border p-6"
        >
          <p className="text-muted-foreground text-sm">
            {item.label}
          </p>

          <div className="mt-2 text-3xl font-bold">
            <StatValue value={item.value} suffix={item.suffix} />
          </div>
        </div>
      ))}
    </div>
  )
}

function useCountUp(arg0: { isCounting: boolean; end: number; duration: number; }): { value: any; } {
    throw new Error("Function not implemented.");
}

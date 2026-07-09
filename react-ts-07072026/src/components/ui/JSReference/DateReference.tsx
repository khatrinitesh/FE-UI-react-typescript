interface DateReferenceItem {
  name: string
  description: string
  example: string
  output: string
  category: 'Create' | 'Get' | 'Set' | 'Convert' | 'Static' | 'Deprecated' | 'Other'
}


const dateReference: DateReferenceItem[] = [
  {
    name: 'new Date()',
    description: 'Creates a new Date object.',
    example: 'const date = new Date()',
    output: 'Current date and time',
    category: 'Create',
  },
  {
    name: 'constructor',
    description: 'Returns the function that created the Date prototype.',
    example: 'new Date().constructor',
    output: 'function Date()',
    category: 'Other',
  },
  {
    name: 'getDate()',
    description: 'Returns the day of the month from 1 to 31.',
    example: 'new Date("2025-07-15").getDate()',
    output: '15',
    category: 'Get',
  },
  {
    name: 'getDay()',
    description: 'Returns the day of the week from 0 to 6. Sunday is 0.',
    example: 'new Date("2025-07-15").getDay()',
    output: '2',
    category: 'Get',
  },
  {
    name: 'getFullYear()',
    description: 'Returns the full year.',
    example: 'new Date("2025-07-15").getFullYear()',
    output: '2025',
    category: 'Get',
  },
  {
    name: 'getHours()',
    description: 'Returns the hour from 0 to 23.',
    example: 'new Date("2025-07-15T10:30:00").getHours()',
    output: '10',
    category: 'Get',
  },
  {
    name: 'getMilliseconds()',
    description: 'Returns milliseconds from 0 to 999.',
    example: 'new Date("2025-07-15T10:30:00.500").getMilliseconds()',
    output: '500',
    category: 'Get',
  },
  {
    name: 'getMinutes()',
    description: 'Returns minutes from 0 to 59.',
    example: 'new Date("2025-07-15T10:30:00").getMinutes()',
    output: '30',
    category: 'Get',
  },
  {
    name: 'getMonth()',
    description: 'Returns the month from 0 to 11. January is 0.',
    example: 'new Date("2025-07-15").getMonth()',
    output: '6',
    category: 'Get',
  },
  {
    name: 'getSeconds()',
    description: 'Returns seconds from 0 to 59.',
    example: 'new Date("2025-07-15T10:30:45").getSeconds()',
    output: '45',
    category: 'Get',
  },
  {
    name: 'getTime()',
    description: 'Returns milliseconds since January 1, 1970.',
    example: 'new Date("2025-07-15").getTime()',
    output: 'Milliseconds timestamp',
    category: 'Get',
  },
  {
    name: 'getTimezoneOffset()',
    description: 'Returns the difference between UTC and local time in minutes.',
    example: 'new Date().getTimezoneOffset()',
    output: 'Timezone offset in minutes',
    category: 'Get',
  },
  {
    name: 'getUTCDate()',
    description: 'Returns the day of the month according to UTC time.',
    example: 'new Date("2025-07-15T00:00:00Z").getUTCDate()',
    output: '15',
    category: 'Get',
  },
  {
    name: 'getUTCDay()',
    description: 'Returns the day of the week according to UTC time.',
    example: 'new Date("2025-07-15T00:00:00Z").getUTCDay()',
    output: '2',
    category: 'Get',
  },
  {
    name: 'getUTCFullYear()',
    description: 'Returns the year according to UTC time.',
    example: 'new Date("2025-07-15T00:00:00Z").getUTCFullYear()',
    output: '2025',
    category: 'Get',
  },
  {
    name: 'getUTCHours()',
    description: 'Returns the hour according to UTC time.',
    example: 'new Date("2025-07-15T10:30:00Z").getUTCHours()',
    output: '10',
    category: 'Get',
  },
  {
    name: 'getUTCMilliseconds()',
    description: 'Returns milliseconds according to UTC time.',
    example: 'new Date("2025-07-15T10:30:00.500Z").getUTCMilliseconds()',
    output: '500',
    category: 'Get',
  },
  {
    name: 'getUTCMinutes()',
    description: 'Returns minutes according to UTC time.',
    example: 'new Date("2025-07-15T10:30:00Z").getUTCMinutes()',
    output: '30',
    category: 'Get',
  },
  {
    name: 'getUTCMonth()',
    description: 'Returns the month according to UTC time from 0 to 11.',
    example: 'new Date("2025-07-15T00:00:00Z").getUTCMonth()',
    output: '6',
    category: 'Get',
  },
  {
    name: 'getUTCSeconds()',
    description: 'Returns seconds according to UTC time.',
    example: 'new Date("2025-07-15T10:30:45Z").getUTCSeconds()',
    output: '45',
    category: 'Get',
  },
  {
    name: 'getYear()',
    description: 'Deprecated. Use getFullYear() instead.',
    example: 'new Date("2025-07-15").getYear()',
    output: '125',
    category: 'Deprecated',
  },
  {
    name: 'Date.now()',
    description: 'Returns milliseconds since January 1, 1970.',
    example: 'Date.now()',
    output: 'Current timestamp',
    category: 'Static',
  },
  {
    name: 'Date.parse()',
    description: 'Parses a date string and returns milliseconds since January 1, 1970.',
    example: 'Date.parse("2025-07-15")',
    output: 'Milliseconds timestamp',
    category: 'Static',
  },
  {
    name: 'prototype',
    description: 'Allows adding properties and methods to Date objects.',
    example: 'Date.prototype.customMethod = function() {}',
    output: 'Custom Date method',
    category: 'Other',
  },
  {
    name: 'setDate()',
    description: 'Sets the day of the month.',
    example: 'const d = new Date("2025-07-15"); d.setDate(20)',
    output: 'Date changed to 20 July',
    category: 'Set',
  },
  {
    name: 'setFullYear()',
    description: 'Sets the year.',
    example: 'const d = new Date(); d.setFullYear(2030)',
    output: 'Year changed to 2030',
    category: 'Set',
  },
  {
    name: 'setHours()',
    description: 'Sets the hour.',
    example: 'const d = new Date(); d.setHours(15)',
    output: 'Hour changed to 15',
    category: 'Set',
  },
  {
    name: 'setMilliseconds()',
    description: 'Sets milliseconds.',
    example: 'const d = new Date(); d.setMilliseconds(500)',
    output: 'Milliseconds changed to 500',
    category: 'Set',
  },
  {
    name: 'setMinutes()',
    description: 'Sets minutes.',
    example: 'const d = new Date(); d.setMinutes(45)',
    output: 'Minutes changed to 45',
    category: 'Set',
  },
  {
    name: 'setMonth()',
    description: 'Sets the month from 0 to 11.',
    example: 'const d = new Date(); d.setMonth(11)',
    output: 'Month changed to December',
    category: 'Set',
  },
  {
    name: 'setSeconds()',
    description: 'Sets seconds.',
    example: 'const d = new Date(); d.setSeconds(30)',
    output: 'Seconds changed to 30',
    category: 'Set',
  },
  {
    name: 'setTime()',
    description: 'Sets date using milliseconds since January 1, 1970.',
    example: 'const d = new Date(); d.setTime(0)',
    output: 'January 1, 1970',
    category: 'Set',
  },
  {
    name: 'setUTCDate()',
    description: 'Sets the day of the month according to UTC time.',
    example: 'const d = new Date(); d.setUTCDate(20)',
    output: 'UTC date changed',
    category: 'Set',
  },
  {
    name: 'setUTCFullYear()',
    description: 'Sets the year according to UTC time.',
    example: 'const d = new Date(); d.setUTCFullYear(2030)',
    output: 'UTC year changed',
    category: 'Set',
  },
  {
    name: 'setUTCHours()',
    description: 'Sets the hour according to UTC time.',
    example: 'const d = new Date(); d.setUTCHours(18)',
    output: 'UTC hour changed',
    category: 'Set',
  },
  {
    name: 'setUTCMilliseconds()',
    description: 'Sets milliseconds according to UTC time.',
    example: 'const d = new Date(); d.setUTCMilliseconds(900)',
    output: 'UTC milliseconds changed',
    category: 'Set',
  },
  {
    name: 'setUTCMinutes()',
    description: 'Sets minutes according to UTC time.',
    example: 'const d = new Date(); d.setUTCMinutes(50)',
    output: 'UTC minutes changed',
    category: 'Set',
  },
  {
    name: 'setUTCMonth()',
    description: 'Sets month according to UTC time from 0 to 11.',
    example: 'const d = new Date(); d.setUTCMonth(5)',
    output: 'UTC month changed to June',
    category: 'Set',
  },
  {
    name: 'setUTCSeconds()',
    description: 'Sets seconds according to UTC time.',
    example: 'const d = new Date(); d.setUTCSeconds(25)',
    output: 'UTC seconds changed',
    category: 'Set',
  },
  {
    name: 'setYear()',
    description: 'Deprecated. Use setFullYear() instead.',
    example: 'const d = new Date(); d.setYear(125)',
    output: 'Deprecated method',
    category: 'Deprecated',
  },
  {
    name: 'toDateString()',
    description: 'Converts the date portion into a readable string.',
    example: 'new Date("2025-07-15").toDateString()',
    output: '"Tue Jul 15 2025"',
    category: 'Convert',
  },
  {
    name: 'toGMTString()',
    description: 'Deprecated. Use toUTCString() instead.',
    example: 'new Date().toGMTString()',
    output: 'GMT date string',
    category: 'Deprecated',
  },
  {
    name: 'toISOString()',
    description: 'Returns date as an ISO standard string.',
    example: 'new Date("2025-07-15").toISOString()',
    output: '"2025-07-15T00:00:00.000Z"',
    category: 'Convert',
  },
  {
    name: 'toJSON()',
    description: 'Returns date as a JSON formatted date string.',
    example: 'new Date("2025-07-15").toJSON()',
    output: '"2025-07-15T00:00:00.000Z"',
    category: 'Convert',
  },
  {
    name: 'toLocaleDateString()',
    description: 'Returns date portion using locale format.',
    example: 'new Date("2025-07-15").toLocaleDateString()',
    output: 'Locale date string',
    category: 'Convert',
  },
  {
    name: 'toLocaleTimeString()',
    description: 'Returns time portion using locale format.',
    example: 'new Date().toLocaleTimeString()',
    output: 'Locale time string',
    category: 'Convert',
  },
  {
    name: 'toLocaleString()',
    description: 'Returns date and time using locale format.',
    example: 'new Date().toLocaleString()',
    output: 'Locale date and time string',
    category: 'Convert',
  },
  {
    name: 'toString()',
    description: 'Converts Date object to a string.',
    example: 'new Date().toString()',
    output: 'Date string',
    category: 'Convert',
  },
  {
    name: 'toTimeString()',
    description: 'Converts the time portion to a string.',
    example: 'new Date().toTimeString()',
    output: 'Time string',
    category: 'Convert',
  },
  {
    name: 'toUTCString()',
    description: 'Converts Date object to a string according to UTC time.',
    example: 'new Date().toUTCString()',
    output: 'UTC date string',
    category: 'Convert',
  },
  {
    name: 'Date.UTC()',
    description: 'Returns milliseconds for a date according to UTC time.',
    example: 'Date.UTC(2025, 6, 15)',
    output: 'Milliseconds timestamp',
    category: 'Static',
  },
  {
    name: 'valueOf()',
    description: 'Returns primitive value of Date object.',
    example: 'new Date("2025-07-15").valueOf()',
    output: 'Milliseconds timestamp',
    category: 'Other',
  },
]

const categoryStyles: Record<DateReferenceItem['category'], string> = {
  Create: 'bg-emerald-400/10 text-emerald-300',
  Get: 'bg-cyan-400/10 text-cyan-300',
  Set: 'bg-orange-400/10 text-orange-300',
  Convert: 'bg-purple-400/10 text-purple-300',
  Static: 'bg-blue-400/10 text-blue-300',
  Deprecated: 'bg-red-400/10 text-red-300',
  Other: 'bg-slate-400/10 text-slate-300',
}

export default function DateReference() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            React TypeScript
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            JavaScript Date Methods and Properties
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Revised July 2025. This table shows commonly used JavaScript Date
            methods with description, example and output.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {Object.keys(categoryStyles).map((category) => (
            <span
              key={category}
              className={`rounded-full px-4 py-2 text-xs font-bold ${
                categoryStyles[category as DateReferenceItem['category']]
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                    Name
                  </th>
                  <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                    Category
                  </th>
                  <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                    Description
                  </th>
                  <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                    Example
                  </th>
                  <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                    Output
                  </th>
                </tr>
              </thead>

              <tbody>
                {dateReference.map((item, index) => (
                  <tr
                    key={`${item.name}-${index}`}
                    className="border-t border-white/10 transition hover:bg-white/10"
                  >
                    <td className="px-5 py-4 align-top">
                      <code className="rounded-lg bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-300">
                        {item.name}
                      </code>
                    </td>

                    <td className="px-5 py-4 align-top">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          categoryStyles[item.category]
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>

                    <td className="px-5 py-4 align-top text-sm leading-6 text-slate-300">
                      {item.description}
                    </td>

                    <td className="px-5 py-4 align-top">
                      <code className="block rounded-xl bg-black/40 p-3 text-sm text-emerald-300">
                        {item.example}
                      </code>
                    </td>

                    <td className="px-5 py-4 align-top">
                      <code className="block rounded-xl bg-black/40 p-3 text-sm text-yellow-300">
                        {item.output}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <DateExamples />
      </div>
    </section>
  )
}

function DateExamples() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h2 className="text-2xl font-black text-white">
          Basic TypeScript Date Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`const today: Date = new Date()

const day: number = today.getDate()
const month: number = today.getMonth() + 1
const year: number = today.getFullYear()

console.log(day)
console.log(month)
console.log(year)`}
        </pre>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h2 className="text-2xl font-black text-white">
          Format Date Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`const date: Date = new Date("2025-07-15")

const formattedDate = date.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

console.log(formattedDate)
// Output: 15 July 2025`}
        </pre>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl lg:col-span-2">
        <h2 className="text-2xl font-black text-white">
          Important Interview Notes
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
          <p>
            <strong className="text-cyan-300">Date</strong> in JavaScript is
            used to work with date and time.
          </p>

          <p>
            <code className="rounded bg-black/40 px-2 py-1 text-yellow-300">
              getMonth()
            </code>{' '}
            returns month from <strong>0 to 11</strong>, so January is 0 and
            December is 11.
          </p>

          <p>
            <code className="rounded bg-black/40 px-2 py-1 text-yellow-300">
              getDay()
            </code>{' '}
            returns weekday from <strong>0 to 6</strong>, where Sunday is 0.
          </p>

          <p>
            <code className="rounded bg-black/40 px-2 py-1 text-yellow-300">
              Date.now()
            </code>{' '}
            returns the current timestamp in milliseconds.
          </p>

          <p>
            Avoid using deprecated methods like{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-red-300">
              getYear()
            </code>
            ,{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-red-300">
              setYear()
            </code>{' '}
            and{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-red-300">
              toGMTString()
            </code>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
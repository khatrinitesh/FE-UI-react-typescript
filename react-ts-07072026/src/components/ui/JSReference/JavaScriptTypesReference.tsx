interface ReferenceItem {
  name: string
  type: string
  description: string
  example: string
  output: string
}

const booleanReference: ReferenceItem[] = [
  {
    name: 'Boolean()',
    type: 'Boolean Method',
    description: 'Converts a value into true or false.',
    example: 'Boolean(1)',
    output: 'true',
  },
  {
    name: 'new Boolean()',
    type: 'Boolean Object',
    description: 'Creates a Boolean object. Usually not recommended.',
    example: 'new Boolean(false)',
    output: 'Boolean object',
  },
  {
    name: 'toString()',
    type: 'Boolean Method',
    description: 'Converts a boolean value to a string.',
    example: 'true.toString()',
    output: '"true"',
  },
  {
    name: 'valueOf()',
    type: 'Boolean Method',
    description: 'Returns the primitive value of a Boolean object.',
    example: 'const value = new Boolean(true); value.valueOf()',
    output: 'true',
  },
]

const dataTypesReference: ReferenceItem[] = [
  {
    name: 'string',
    type: 'Primitive',
    description: 'Represents text data.',
    example: 'const name: string = "React"',
    output: '"React"',
  },
  {
    name: 'number',
    type: 'Primitive',
    description: 'Represents integer and decimal numbers.',
    example: 'const age: number = 25',
    output: '25',
  },
  {
    name: 'boolean',
    type: 'Primitive',
    description: 'Represents true or false value.',
    example: 'const isActive: boolean = true',
    output: 'true',
  },
  {
    name: 'object',
    type: 'Non-Primitive',
    description: 'Represents a collection of key-value pairs.',
    example: 'const user = { name: "John", age: 25 }',
    output: '{ name: "John", age: 25 }',
  },
  {
    name: 'null',
    type: 'Primitive',
    description: 'Represents an empty or unknown value.',
    example: 'const data: null = null',
    output: 'null',
  },
  {
    name: 'undefined',
    type: 'Primitive',
    description: 'Represents a variable that has been declared but not assigned a value.',
    example: 'let userName: undefined',
    output: 'undefined',
  },
  {
    name: 'bigint',
    type: 'Primitive',
    description: 'Represents very large integer values.',
    example: 'const bigNumber: bigint = 9007199254740991n',
    output: '9007199254740991n',
  },
  {
    name: 'symbol',
    type: 'Primitive',
    description: 'Represents a unique value.',
    example: 'const id: symbol = Symbol("id")',
    output: 'Symbol(id)',
  },
]

export default function JavaScriptTypesReference() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            React TypeScript
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            JavaScript Boolean & Data Types Reference
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            JavaScript has primitive and non-primitive data types. Boolean is
            used for true or false values.
          </p>
        </div>

        <ReferenceTable
          title="JavaScript Boolean Reference"
          data={booleanReference}
          color="emerald"
        />

        <div className="mt-10">
          <ReferenceTable
            title="JavaScript Data Types Reference"
            data={dataTypesReference}
            color="cyan"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <h2 className="text-2xl font-black text-white">
            Simple Interview Explanation
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              <strong className="text-emerald-300">Boolean</strong> is a
              JavaScript data type that stores only two values:
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-yellow-300">
                true
              </code>
              or
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-yellow-300">
                false
              </code>
              .
            </p>

            <p>
              JavaScript data types are mainly divided into two categories:
              primitive and non-primitive.
            </p>

            <p>
              Primitive types are
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                string
              </code>
              ,
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                number
              </code>
              ,
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                boolean
              </code>
              ,
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                null
              </code>
              ,
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                undefined
              </code>
              ,
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                bigint
              </code>
              and
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-cyan-300">
                symbol
              </code>
              .
            </p>

            <p>
              Non-primitive type is mainly
              <code className="mx-2 rounded bg-black/40 px-2 py-1 text-purple-300">
                object
              </code>
              . Arrays and functions are also special types of objects.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
          <h2 className="text-2xl font-black text-white">
            TypeScript Examples
          </h2>

          <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`const userName: string = "Nitesh"
const age: number = 25
const isLoggedIn: boolean = true
const user: object = { name: "Nitesh", role: "Frontend Developer" }
const emptyValue: null = null
let notAssigned: undefined = undefined
const bigNumber: bigint = 9007199254740991n
const uniqueId: symbol = Symbol("id")

console.log(typeof userName)     // string
console.log(typeof age)          // number
console.log(typeof isLoggedIn)   // boolean
console.log(typeof user)         // object
console.log(typeof emptyValue)   // object
console.log(typeof notAssigned)  // undefined
console.log(typeof bigNumber)    // bigint
console.log(typeof uniqueId)     // symbol`}
          </pre>
        </div>
      </div>
    </section>
  )
}

interface ReferenceTableProps {
  title: string
  data: ReferenceItem[]
  color: 'emerald' | 'cyan'
}

function ReferenceTable({ title, data, color }: ReferenceTableProps) {
  const colorClass =
    color === 'emerald'
      ? 'bg-emerald-400/10 text-emerald-300'
      : 'bg-cyan-400/10 text-cyan-300'

  return (
    <div>
      <h2 className="mb-5 text-2xl font-black text-white">{title}</h2>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                  Name
                </th>
                <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                  Type
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
              {data.map((item, index) => (
                <tr
                  key={`${item.name}-${index}`}
                  className="border-t border-white/10 transition hover:bg-white/10"
                >
                  <td className="px-5 py-4 align-top">
                    <code
                      className={`rounded-lg px-3 py-1 text-sm font-bold ${colorClass}`}
                    >
                      {item.name}
                    </code>
                  </td>

                  <td className="px-5 py-4 align-top text-sm text-slate-300">
                    {item.type}
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
    </div>
  )
}
interface BigIntMethod {
  name: string
  description: string
  example: string
  output: string
  note?: string
}

const bigintMethods: BigIntMethod[] = [
  {
    name: 'BigInt()',
    description: 'Creates and returns a BigInt value.',
    example: 'const value = BigInt(9007199254740991)',
    output: '9007199254740991n',
  },
  {
    name: 'new BigInt()',
    description: 'This is not allowed. BigInt is not a constructor.',
    example: 'const value = new BigInt(10)',
    output: 'TypeError',
    note: 'Use BigInt(10), not new BigInt(10).',
  },
  {
    name: 'toString()',
    description: 'Converts a BigInt value into a string.',
    example: 'const value = 123456789n; value.toString()',
    output: '"123456789"',
  },
  {
    name: 'valueOf()',
    description: 'Returns the primitive value of a BigInt object.',
    example: 'const value = Object(100n); value.valueOf()',
    output: '100n',
  },
]

export default function BigIntReference() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            React TypeScript
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            JavaScript BigInt Reference
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            BigInt is used to store very large integer values that are bigger
            than the normal JavaScript number limit.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold uppercase tracking-wider text-slate-300">
                    Name
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
                {bigintMethods.map((method, index) => (
                  <tr
                    key={`${method.name}-${index}`}
                    className="border-t border-white/10 transition hover:bg-white/10"
                  >
                    <td className="px-5 py-4 align-top">
                      <code className="rounded-lg bg-purple-400/10 px-3 py-1 text-sm font-bold text-purple-300">
                        {method.name}
                      </code>
                    </td>

                    <td className="px-5 py-4 align-top text-sm leading-6 text-slate-300">
                      {method.description}

                      {method.note && (
                        <p className="mt-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300">
                          {method.note}
                        </p>
                      )}
                    </td>

                    <td className="px-5 py-4 align-top">
                      <code className="block rounded-xl bg-black/40 p-3 text-sm text-emerald-300">
                        {method.example}
                      </code>
                    </td>

                    <td className="px-5 py-4 align-top">
                      <code className="block rounded-xl bg-black/40 p-3 text-sm text-yellow-300">
                        {method.output}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-black text-white">
            Simple BigInt Example
          </h2>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-black/50 p-4 text-sm text-emerald-300">
{`const normalNumber: number = 9007199254740991
const bigNumber: bigint = 9007199254740991n

console.log(bigNumber)
// Output: 9007199254740991n`}
          </pre>
        </div>
      </div>
    </section>
  )
}
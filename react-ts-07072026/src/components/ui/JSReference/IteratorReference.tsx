interface IteratorReferenceItem {
  name: string
  description: string
  example: string
  output: string
  category: 'Iterator' | 'Iterable' | 'Method' | 'Loop'
}

const iteratorReference: IteratorReferenceItem[] = [
  {
    name: 'Iterator',
    description:
      'An object that provides a next() method to access values one by one.',
    example: 'const iterator = array[Symbol.iterator]()',
    output: 'Iterator object',
    category: 'Iterator',
  },
  {
    name: 'Iterable',
    description:
      'An object that can be looped using for...of. Arrays, strings, maps and sets are iterable.',
    example: 'for (const item of [10, 20, 30])',
    output: '10 20 30',
    category: 'Iterable',
  },
  {
    name: 'next()',
    description:
      'Returns the next value from an iterator object. It returns an object with value and done.',
    example: 'iterator.next()',
    output: '{ value: 10, done: false }',
    category: 'Method',
  },
  {
    name: 'value',
    description:
      'The current value returned by the iterator next() method.',
    example: 'iterator.next().value',
    output: '10',
    category: 'Iterator',
  },
  {
    name: 'done',
    description:
      'A boolean value that tells whether the iterator is completed or not.',
    example: 'iterator.next().done',
    output: 'false',
    category: 'Iterator',
  },
  {
    name: 'Symbol.iterator',
    description:
      'A special symbol method that returns an iterator object.',
    example: '[1, 2, 3][Symbol.iterator]()',
    output: 'Array Iterator',
    category: 'Method',
  },
  {
    name: 'for...of',
    description:
      'Loops over iterable values like arrays, strings, maps and sets.',
    example: 'for (const value of numbers) console.log(value)',
    output: 'Each value printed',
    category: 'Loop',
  },
  {
    name: 'Array Iterator',
    description:
      'An iterator created from an array.',
    example: '[10, 20, 30][Symbol.iterator]()',
    output: 'Array Iterator object',
    category: 'Iterator',
  },
  {
    name: 'String Iterator',
    description:
      'An iterator created from a string.',
    example: '"React"[Symbol.iterator]()',
    output: 'String Iterator object',
    category: 'Iterator',
  },
  {
    name: 'Map Iterator',
    description:
      'An iterator created from a Map object.',
    example: 'new Map([["name", "React"]]).entries()',
    output: 'Map Iterator object',
    category: 'Iterator',
  },
  {
    name: 'Set Iterator',
    description:
      'An iterator created from a Set object.',
    example: 'new Set([1, 2, 3]).values()',
    output: 'Set Iterator object',
    category: 'Iterator',
  },
  {
    name: 'keys()',
    description:
      'Returns an iterator containing keys or indexes.',
    example: 'Array.from(["a", "b"].keys())',
    output: '[0, 1]',
    category: 'Method',
  },
  {
    name: 'values()',
    description:
      'Returns an iterator containing values.',
    example: 'Array.from(["a", "b"].values())',
    output: '["a", "b"]',
    category: 'Method',
  },
  {
    name: 'entries()',
    description:
      'Returns an iterator containing key-value pairs.',
    example: 'Array.from(["a", "b"].entries())',
    output: '[[0, "a"], [1, "b"]]',
    category: 'Method',
  },
]

const categoryStyles: Record<IteratorReferenceItem['category'], string> = {
  Iterator: 'bg-cyan-400/10 text-cyan-300',
  Iterable: 'bg-emerald-400/10 text-emerald-300',
  Method: 'bg-purple-400/10 text-purple-300',
  Loop: 'bg-orange-400/10 text-orange-300',
}

export default function IteratorReference() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            React TypeScript
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            JavaScript Iterator Reference
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Iterator is used to access values one by one. Iterable objects like
            arrays, strings, maps and sets can be looped using for...of.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {Object.keys(categoryStyles).map((category) => (
            <span
              key={category}
              className={`rounded-full px-4 py-2 text-xs font-bold ${
                categoryStyles[category as IteratorReferenceItem['category']]
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-238 border-collapse text-left">
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
                {iteratorReference.map((item, index) => (
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

        <IteratorExamples />
      </div>
    </section>
  )
}

function IteratorExamples() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h2 className="text-2xl font-black text-white">
          Basic Iterator Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`const numbers: number[] = [10, 20, 30]

const iterator = numbers[Symbol.iterator]()

console.log(iterator.next())
// Output: { value: 10, done: false }

console.log(iterator.next())
// Output: { value: 20, done: false }

console.log(iterator.next())
// Output: { value: 30, done: false }

console.log(iterator.next())
// Output: { value: undefined, done: true }`}
        </pre>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h2 className="text-2xl font-black text-white">
          for...of Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`const skills: string[] = ["HTML", "CSS", "JavaScript"]

for (const skill of skills) {
  console.log(skill)
}

// Output:
// HTML
// CSS
// JavaScript`}
        </pre>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h2 className="text-2xl font-black text-white">
          String Iterator Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`const text: string = "React"

const iterator = text[Symbol.iterator]()

console.log(iterator.next())
// Output: { value: "R", done: false }

console.log(iterator.next())
// Output: { value: "e", done: false }`}
        </pre>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <h2 className="text-2xl font-black text-white">
          Custom Iterator Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl bg-black/50 p-5 text-sm leading-7 text-emerald-300">
{`function createNumberIterator(numbers: number[]) {
  let index = 0

  return {
    next() {
      if (index < numbers.length) {
        return {
          value: numbers[index++],
          done: false,
        }
      }

      return {
        value: undefined,
        done: true,
      }
    },
  }
}

const iterator = createNumberIterator([100, 200])

console.log(iterator.next())
// Output: { value: 100, done: false }

console.log(iterator.next())
// Output: { value: 200, done: false }

console.log(iterator.next())
// Output: { value: undefined, done: true }`}
        </pre>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl lg:col-span-2">
        <h2 className="text-2xl font-black text-white">
          Important Interview Notes
        </h2>

        <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
          <p>
            <strong className="text-cyan-300">Iterator</strong> is an object
            that has a{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-yellow-300">
              next()
            </code>{' '}
            method.
          </p>

          <p>
            The{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-yellow-300">
              next()
            </code>{' '}
            method returns an object with two properties:{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-emerald-300">
              value
            </code>{' '}
            and{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-emerald-300">
              done
            </code>
            .
          </p>

          <p>
            <strong className="text-emerald-300">Iterable</strong> means an
            object that can be looped using{' '}
            <code className="rounded bg-black/40 px-2 py-1 text-orange-300">
              for...of
            </code>
            .
          </p>

          <p>
            Arrays, strings, maps and sets are built-in iterable objects in
            JavaScript.
          </p>
        </div>
      </div>
    </div>
  )
}
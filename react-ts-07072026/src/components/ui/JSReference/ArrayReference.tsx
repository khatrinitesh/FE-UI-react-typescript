interface ArrayMethod {
  name: string
  description: string
  example: string
  output: string
}

const arrayMethods: ArrayMethod[] = [
  {
    name: '[ ]',
    description: 'Creates a new array',
    example: 'const arr = [1, 2, 3]',
    output: '[1, 2, 3]',
  },
  {
    name: 'new Array()',
    description: 'Creates a new array',
    example: 'const arr = new Array(1, 2, 3)',
    output: '[1, 2, 3]',
  },
  {
    name: 'at()',
    description: 'Returns an indexed element of an array',
    example: 'numbers.at(1)',
    output: '20',
  },
  {
    name: 'concat()',
    description: 'Joins arrays and returns a new array',
    example: '[1, 2].concat([3, 4])',
    output: '[1, 2, 3, 4]',
  },
  {
    name: 'copyWithin()',
    description: 'Copies array elements inside the same array',
    example: '[1, 2, 3, 4].copyWithin(1, 2)',
    output: '[1, 3, 4, 4]',
  },
  {
    name: 'entries()',
    description: 'Returns key/value pair iterator',
    example: 'Array.from(["a", "b"].entries())',
    output: '[[0, "a"], [1, "b"]]',
  },
  {
    name: 'every()',
    description: 'Checks if every element passes a condition',
    example: '[10, 20, 30].every(num => num > 5)',
    output: 'true',
  },
  {
    name: 'fill()',
    description: 'Fills array elements with a static value',
    example: '[1, 2, 3].fill(0)',
    output: '[0, 0, 0]',
  },
  {
    name: 'filter()',
    description: 'Creates a new array with matching elements',
    example: '[1, 2, 3, 4].filter(num => num > 2)',
    output: '[3, 4]',
  },
  {
    name: 'find()',
    description: 'Returns the first matching element',
    example: '[10, 20, 30].find(num => num > 15)',
    output: '20',
  },
  {
    name: 'findIndex()',
    description: 'Returns index of the first matching element',
    example: '[10, 20, 30].findIndex(num => num > 15)',
    output: '1',
  },
  {
    name: 'findLast()',
    description: 'Returns the last matching element',
    example: '[10, 20, 30, 40].findLast(num => num > 15)',
    output: '40',
  },
  {
    name: 'findLastIndex()',
    description: 'Returns index of the last matching element',
    example: '[10, 20, 30, 40].findLastIndex(num => num > 15)',
    output: '3',
  },
  {
    name: 'flat()',
    description: 'Flattens nested arrays',
    example: '[1, [2, 3], [4]].flat()',
    output: '[1, 2, 3, 4]',
  },
  {
    name: 'flatMap()',
    description: 'Maps and flattens array',
    example: '[1, 2, 3].flatMap(num => [num, num * 2])',
    output: '[1, 2, 2, 4, 3, 6]',
  },
  {
    name: 'forEach()',
    description: 'Runs a function for each array element',
    example: '[1, 2, 3].forEach(num => console.log(num))',
    output: '1 2 3',
  },
  {
    name: 'Array.from()',
    description: 'Creates an array from iterable object',
    example: 'Array.from("Hello")',
    output: '["H", "e", "l", "l", "o"]',
  },
  {
    name: 'includes()',
    description: 'Checks if array contains a value',
    example: '[1, 2, 3].includes(2)',
    output: 'true',
  },
  {
    name: 'indexOf()',
    description: 'Returns first index of a value',
    example: '["a", "b", "c"].indexOf("b")',
    output: '1',
  },
  {
    name: 'Array.isArray()',
    description: 'Checks whether value is an array',
    example: 'Array.isArray([1, 2, 3])',
    output: 'true',
  },
  {
    name: 'join()',
    description: 'Joins array elements into a string',
    example: '["React", "TypeScript"].join(" ")',
    output: '"React TypeScript"',
  },
  {
    name: 'keys()',
    description: 'Returns array index iterator',
    example: 'Array.from(["a", "b"].keys())',
    output: '[0, 1]',
  },
  {
    name: 'lastIndexOf()',
    description: 'Returns last index of a value',
    example: '[1, 2, 3, 2].lastIndexOf(2)',
    output: '3',
  },
  {
    name: 'length',
    description: 'Returns number of array elements',
    example: '[1, 2, 3].length',
    output: '3',
  },
  {
    name: 'map()',
    description: 'Creates a new array by transforming each element',
    example: '[1, 2, 3].map(num => num * 2)',
    output: '[2, 4, 6]',
  },
  {
    name: 'Array.of()',
    description: 'Creates an array from arguments',
    example: 'Array.of(1, 2, 3)',
    output: '[1, 2, 3]',
  },
  {
    name: 'pop()',
    description: 'Removes last element and returns it',
    example: 'const arr = [1, 2, 3]; arr.pop()',
    output: '3',
  },
  {
    name: 'push()',
    description: 'Adds element at the end and returns new length',
    example: 'const arr = [1, 2]; arr.push(3)',
    output: '3',
  },
  {
    name: 'reduce()',
    description: 'Reduces array into a single value',
    example: '[1, 2, 3].reduce((total, num) => total + num, 0)',
    output: '6',
  },
  {
    name: 'reduceRight()',
    description: 'Reduces array from right to left',
    example: '["a", "b", "c"].reduceRight((a, b) => a + b)',
    output: '"cba"',
  },
  {
    name: 'reverse()',
    description: 'Reverses original array',
    example: '[1, 2, 3].reverse()',
    output: '[3, 2, 1]',
  },
  {
    name: 'shift()',
    description: 'Removes first element and returns it',
    example: 'const arr = [1, 2, 3]; arr.shift()',
    output: '1',
  },
  {
    name: 'slice()',
    description: 'Returns selected part of array',
    example: '[1, 2, 3, 4].slice(1, 3)',
    output: '[2, 3]',
  },
  {
    name: 'some()',
    description: 'Checks if at least one element passes condition',
    example: '[1, 2, 3].some(num => num > 2)',
    output: 'true',
  },
  {
    name: 'sort()',
    description: 'Sorts original array',
    example: '[3, 1, 2].sort((a, b) => a - b)',
    output: '[1, 2, 3]',
  },
  {
    name: 'splice()',
    description: 'Adds or removes elements from original array',
    example: 'const arr = [1, 2, 3]; arr.splice(1, 1)',
    output: '[2]',
  },
  {
    name: 'toReversed()',
    description: 'Returns new reversed array',
    example: '[1, 2, 3].toReversed()',
    output: '[3, 2, 1]',
  },
  {
    name: 'toSorted()',
    description: 'Returns new sorted array',
    example: '[3, 1, 2].toSorted((a, b) => a - b)',
    output: '[1, 2, 3]',
  },
  {
    name: 'toSpliced()',
    description: 'Returns new array with added or removed elements',
    example: '[1, 2, 3].toSpliced(1, 1)',
    output: '[1, 3]',
  },
  {
    name: 'toString()',
    description: 'Converts array to string',
    example: '[1, 2, 3].toString()',
    output: '"1,2,3"',
  },
  {
    name: 'unshift()',
    description: 'Adds elements at the beginning and returns new length',
    example: 'const arr = [2, 3]; arr.unshift(1)',
    output: '3',
  },
  {
    name: 'valueOf()',
    description: 'Returns primitive value of array',
    example: '[1, 2, 3].valueOf()',
    output: '[1, 2, 3]',
  },
  {
    name: 'with()',
    description: 'Returns new array with updated value at index',
    example: '[1, 2, 3].with(1, 99)',
    output: '[1, 99, 3]',
  },
]

export default function ArrayReference() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            React TypeScript
          </p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            JavaScript Array Reference
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Common JavaScript array methods with description, example and output.
            Useful for frontend developer interview preparation.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-225 border-collapse text-left">
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
                {arrayMethods.map((method, index) => (
                  <tr
                    key={`${method.name}-${index}`}
                    className="border-t border-white/10 transition hover:bg-white/10"
                  >
                    <td className="px-5 py-4 align-top">
                      <code className="rounded-lg bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-300">
                        {method.name}
                      </code>
                    </td>

                    <td className="px-5 py-4 align-top text-sm leading-6 text-slate-300">
                      {method.description}
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
      </div>
    </section>
  )
}
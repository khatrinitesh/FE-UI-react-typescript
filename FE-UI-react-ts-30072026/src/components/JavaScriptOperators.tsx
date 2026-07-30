import { useMemo, useState } from "react";

type OperatorResult = {
  operator: string;
  example: string;
  result: string | number | boolean;
};

export function JavaScriptOperators() {
  const [firstNumber, setFirstNumber] = useState<number>(20);
  const [secondNumber, setSecondNumber] = useState<number>(5);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const arithmeticResults = useMemo<OperatorResult[]>(
    () => [
      {
        operator: "+",
        example: `${firstNumber} + ${secondNumber}`,
        result: firstNumber + secondNumber,
      },
      {
        operator: "-",
        example: `${firstNumber} - ${secondNumber}`,
        result: firstNumber - secondNumber,
      },
      {
        operator: "×",
        example: `${firstNumber} * ${secondNumber}`,
        result: firstNumber * secondNumber,
      },
      {
        operator: "÷",
        example: `${firstNumber} / ${secondNumber}`,
        result:
          secondNumber === 0
            ? "Cannot divide by zero"
            : firstNumber / secondNumber,
      },
      {
        operator: "%",
        example: `${firstNumber} % ${secondNumber}`,
        result:
          secondNumber === 0
            ? "Cannot divide by zero"
            : firstNumber % secondNumber,
      },
      {
        operator: "**",
        example: `${firstNumber} ** ${secondNumber}`,
        result: firstNumber ** secondNumber,
      },
    ],
    [firstNumber, secondNumber],
  );

  const comparisonResults: OperatorResult[] = [
    {
      operator: "===",
      example: `${firstNumber} === ${secondNumber}`,
      result: firstNumber === secondNumber,
    },
    {
      operator: "!==",
      example: `${firstNumber} !== ${secondNumber}`,
      result: firstNumber !== secondNumber,
    },
    {
      operator: ">",
      example: `${firstNumber} > ${secondNumber}`,
      result: firstNumber > secondNumber,
    },
    {
      operator: "<",
      example: `${firstNumber} < ${secondNumber}`,
      result: firstNumber < secondNumber,
    },
    {
      operator: ">=",
      example: `${firstNumber} >= ${secondNumber}`,
      result: firstNumber >= secondNumber,
    },
    {
      operator: "<=",
      example: `${firstNumber} <= ${secondNumber}`,
      result: firstNumber <= secondNumber,
    },
  ];

  const logicalResults: OperatorResult[] = [
    {
      operator: "&&",
      example: `${isActive} && ${hasPermission}`,
      result: isActive && hasPermission,
    },
    {
      operator: "||",
      example: `${isActive} || ${hasPermission}`,
      result: isActive || hasPermission,
    },
    {
      operator: "!",
      example: `!${isActive}`,
      result: !isActive,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 px-5 py-10 font-brand text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-brand-14 text-secondary dark:text-primary">
              React + TypeScript
            </span>

            <h1 className="mt-5 text-brand-40 text-secondary dark:text-primary">
              JavaScript Operators
            </h1>

            <p className="mt-3 max-w-2xl text-brand-16 leading-7 text-slate-600 dark:text-slate-300">
              Change the values below to understand how arithmetic, comparison,
              logical and conditional operators work.
            </p>
          </div>

          <div className="mb-8 grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:grid-cols-2">
            <NumberInput
              label="First number"
              value={firstNumber}
              onChange={setFirstNumber}
            />

            <NumberInput
              label="Second number"
              value={secondNumber}
              onChange={setSecondNumber}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <OperatorCard
              title="Arithmetic operators"
              description="Used to perform mathematical calculations."
              results={arithmeticResults}
            />

            <OperatorCard
              title="Comparison operators"
              description="Compare two values and return true or false."
              results={comparisonResults}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-brand-24 text-secondary dark:text-primary">
                Logical operators
              </h2>

              <p className="mt-2 text-brand-14 text-slate-500 dark:text-slate-400">
                Combine or reverse boolean values.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <BooleanButton
                  label="Active"
                  value={isActive}
                  onClick={() => setIsActive((current) => !current)}
                />

                <BooleanButton
                  label="Permission"
                  value={hasPermission}
                  onClick={() => setHasPermission((current) => !current)}
                />
              </div>

              <div className="mt-6 space-y-3">
                {logicalResults.map((item) => (
                  <ResultRow key={item.operator} item={item} />
                ))}
              </div>
            </article>

            <article className="rounded-3xl bg-secondary p-6 text-white shadow-lg shadow-secondary/20 dark:bg-primary dark:text-slate-950">
              <h2 className="text-brand-24">Conditional operator</h2>

              <p className="mt-2 text-brand-14 opacity-75">
                The ternary operator returns one value when a condition is true
                and another when it is false.
              </p>

              <div className="mt-6 rounded-2xl bg-white/10 p-5 dark:bg-secondary/10">
                <code className="text-brand-14">
                  {`isActive ? "Active user" : "Inactive user"`}
                </code>

                <p className="mt-5 text-brand-24">
                  {isActive ? "Active user" : "Inactive user"}
                </p>
              </div>

              <div className="mt-5 rounded-2xl bg-white/10 p-5 dark:bg-secondary/10">
                <p className="text-brand-14 opacity-75">
                  Nullish coalescing operator
                </p>

                <code className="mt-3 block text-brand-14">
                  {`userName ?? "Guest user"`}
                </code>

                <p className="mt-4 text-brand-20">{null ?? "Guest user"}</p>
              </div>
            </article>
          </div>

          <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-brand-24 text-secondary dark:text-primary">
              Assignment operators
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <AssignmentExample
                operator="+="
                code="value += 5"
                result={firstNumber + 5}
              />

              <AssignmentExample
                operator="-="
                code="value -= 5"
                result={firstNumber - 5}
              />

              <AssignmentExample
                operator="*="
                code="value *= 5"
                result={firstNumber * 5}
              />

              <AssignmentExample
                operator="/="
                code="value /= 5"
                result={firstNumber / 5}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

type NumberInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function NumberInput({ label, value, onChange }: NumberInputProps) {
  return (
    <label className="block">
      <span className="text-brand-14 text-slate-600 dark:text-slate-300">
        {label}
      </span>

      <input
        type="number"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-brand-18 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-slate-700 dark:bg-slate-950"
      />
    </label>
  );
}

type OperatorCardProps = {
  title: string;
  description: string;
  results: OperatorResult[];
};

function OperatorCard({ title, description, results }: OperatorCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-brand-24 text-secondary dark:text-primary">
        {title}
      </h2>

      <p className="mt-2 text-brand-14 text-slate-500 dark:text-slate-400">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {results.map((item) => (
          <ResultRow key={`${item.operator}-${item.example}`} item={item} />
        ))}
      </div>
    </article>
  );
}

function ResultRow({ item }: { item: OperatorResult }) {
  return (
    <div className="grid grid-cols-[48px_1fr_auto] items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-brand-16 text-secondary dark:text-primary">
        {item.operator}
      </span>

      <code className="text-brand-14 text-slate-600 dark:text-slate-300">
        {item.example}
      </code>

      <span
        className={`rounded-full px-3 py-1 text-brand-12 ${
          item.result === true
            ? "bg-emerald-100 text-emerald-700"
            : item.result === false
              ? "bg-red-100 text-red-700"
              : "bg-primary/15 text-secondary dark:text-primary"
        }`}
      >
        {String(item.result)}
      </span>
    </div>
  );
}

type BooleanButtonProps = {
  label: string;
  value: boolean;
  onClick: () => void;
};

function BooleanButton({ label, value, onClick }: BooleanButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-4 text-left transition ${
        value
          ? "border-primary bg-primary/15 text-secondary dark:text-primary"
          : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-950"
      }`}
    >
      <span className="block text-brand-14">{label}</span>

      <span className="mt-1 block text-brand-18">{String(value)}</span>
    </button>
  );
}

type AssignmentExampleProps = {
  operator: string;
  code: string;
  result: number;
};

function AssignmentExample({ operator, code, result }: AssignmentExampleProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
      <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-secondary dark:text-primary">
        {operator}
      </span>

      <code className="mt-4 block text-brand-14 text-slate-500">{code}</code>

      <p className="mt-2 text-brand-20 text-secondary dark:text-primary">
        {result}
      </p>
    </div>
  );
}

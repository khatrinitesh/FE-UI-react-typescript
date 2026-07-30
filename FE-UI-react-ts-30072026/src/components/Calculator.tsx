import { useEffect, useState } from "react";

type Operator = "+" | "−" | "×" | "÷";

type CalculatorButton = {
  label: string;
  value: string;
  type?: "number" | "operator" | "action" | "equals";
  className?: string;
};

const buttons: CalculatorButton[] = [
  { label: "AC", value: "clear", type: "action" },
  { label: "+/−", value: "sign", type: "action" },
  { label: "%", value: "percent", type: "action" },
  { label: "÷", value: "÷", type: "operator" },

  { label: "7", value: "7", type: "number" },
  { label: "8", value: "8", type: "number" },
  { label: "9", value: "9", type: "number" },
  { label: "×", value: "×", type: "operator" },

  { label: "4", value: "4", type: "number" },
  { label: "5", value: "5", type: "number" },
  { label: "6", value: "6", type: "number" },
  { label: "−", value: "−", type: "operator" },

  { label: "1", value: "1", type: "number" },
  { label: "2", value: "2", type: "number" },
  { label: "3", value: "3", type: "number" },
  { label: "+", value: "+", type: "operator" },

  {
    label: "0",
    value: "0",
    type: "number",
    className: "col-span-2",
  },
  { label: ".", value: ".", type: "number" },
  { label: "=", value: "equals", type: "equals" },
];

function calculate(
  firstValue: number,
  secondValue: number,
  operator: Operator,
): number {
  switch (operator) {
    case "+":
      return firstValue + secondValue;

    case "−":
      return firstValue - secondValue;

    case "×":
      return firstValue * secondValue;

    case "÷":
      return secondValue === 0 ? Number.NaN : firstValue / secondValue;

    default:
      return secondValue;
  }
}

function formatDisplayValue(value: string): string {
  if (value === "Error") {
    return value;
  }

  const number = Number(value);

  if (!Number.isFinite(number)) {
    return value;
  }

  const [integerPart, decimalPart] = value.split(".");

  const formattedInteger = Number(integerPart).toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
}

export function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [selectedOperator, setSelectedOperator] = useState<Operator | null>(
    null,
  );
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState("");

  const resetCalculator = () => {
    setDisplayValue("0");
    setStoredValue(null);
    setSelectedOperator(null);
    setWaitingForOperand(false);
    setHistory("");
  };

  const inputDigit = (digit: string) => {
    if (displayValue === "Error" || waitingForOperand) {
      setDisplayValue(digit);
      setWaitingForOperand(false);
      return;
    }

    setDisplayValue((currentValue) => {
      if (currentValue === "0") {
        return digit;
      }

      if (currentValue.replace("-", "").replace(".", "").length >= 12) {
        return currentValue;
      }

      return `${currentValue}${digit}`;
    });
  };

  const inputDecimal = () => {
    if (displayValue === "Error" || waitingForOperand) {
      setDisplayValue("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!displayValue.includes(".")) {
      setDisplayValue((currentValue) => `${currentValue}.`);
    }
  };

  const toggleSign = () => {
    if (displayValue === "0" || displayValue === "Error") {
      return;
    }

    setDisplayValue((currentValue) =>
      currentValue.startsWith("-") ? currentValue.slice(1) : `-${currentValue}`,
    );
  };

  const calculatePercent = () => {
    if (displayValue === "Error") {
      return;
    }

    const value = Number(displayValue) / 100;
    setDisplayValue(String(value));
  };

  const chooseOperator = (nextOperator: Operator) => {
    if (displayValue === "Error") {
      resetCalculator();
      return;
    }

    const inputValue = Number(displayValue);

    if (
      storedValue !== null &&
      selectedOperator !== null &&
      !waitingForOperand
    ) {
      const result = calculate(storedValue, inputValue, selectedOperator);

      if (!Number.isFinite(result)) {
        setDisplayValue("Error");
        setHistory("Cannot divide by zero");
        setStoredValue(null);
        setSelectedOperator(null);
        return;
      }

      setDisplayValue(String(result));
      setStoredValue(result);
      setHistory(`${result} ${nextOperator}`);
    } else {
      setStoredValue(inputValue);
      setHistory(`${displayValue} ${nextOperator}`);
    }

    setSelectedOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (
      storedValue === null ||
      selectedOperator === null ||
      displayValue === "Error"
    ) {
      return;
    }

    const secondValue = Number(displayValue);
    const result = calculate(storedValue, secondValue, selectedOperator);

    if (!Number.isFinite(result)) {
      setDisplayValue("Error");
      setHistory("Cannot divide by zero");
    } else {
      setHistory(`${storedValue} ${selectedOperator} ${secondValue} =`);
      setDisplayValue(String(Number(result.toFixed(10))));
    }

    setStoredValue(null);
    setSelectedOperator(null);
    setWaitingForOperand(true);
  };

  const deleteLastCharacter = () => {
    if (waitingForOperand || displayValue === "Error") {
      return;
    }

    setDisplayValue((currentValue) => {
      if (
        currentValue.length === 1 ||
        (currentValue.startsWith("-") && currentValue.length === 2)
      ) {
        return "0";
      }

      return currentValue.slice(0, -1);
    });
  };

  const handleButtonClick = (button: CalculatorButton) => {
    switch (button.value) {
      case "clear":
        resetCalculator();
        break;

      case "sign":
        toggleSign();
        break;

      case "percent":
        calculatePercent();
        break;

      case "equals":
        handleEquals();
        break;

      case ".":
        inputDecimal();
        break;

      case "+":
      case "−":
      case "×":
      case "÷":
        chooseOperator(button.value);
        break;

      default:
        inputDigit(button.value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^[0-9]$/.test(event.key)) {
        inputDigit(event.key);
        return;
      }

      switch (event.key) {
        case ".":
          inputDecimal();
          break;

        case "+":
          chooseOperator("+");
          break;

        case "-":
          chooseOperator("−");
          break;

        case "*":
          chooseOperator("×");
          break;

        case "/":
          event.preventDefault();
          chooseOperator("÷");
          break;

        case "Enter":
        case "=":
          handleEquals();
          break;

        case "Backspace":
          deleteLastCharacter();
          break;

        case "Escape":
          resetCalculator();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-10 font-brand transition-colors dark:bg-slate-950">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-slate-900">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary px-6 pb-7 pt-10 text-white dark:bg-slate-950">
            <div className="pointer-events-none absolute -right-12 -top-16 size-44 rounded-full bg-primary/30 blur-3xl" />

            <p className="relative min-h-6 truncate text-right text-brand-14 text-white/60">
              {history || "Ready"}
            </p>

            <output className="relative mt-3 block min-h-16 overflow-hidden text-right text-brand-48 leading-none">
              {formatDisplayValue(displayValue)}
            </output>
          </div>

          <div className="grid grid-cols-4 gap-3 p-3 pt-5">
            {buttons.map((button) => {
              const isSelectedOperator =
                button.type === "operator" &&
                selectedOperator === button.value &&
                waitingForOperand;

              const buttonStyle =
                button.type === "operator"
                  ? isSelectedOperator
                    ? "bg-secondary text-white ring-4 ring-primary/30 dark:bg-primary dark:text-slate-950"
                    : "bg-primary text-secondary hover:bg-primary/80 dark:text-slate-950"
                  : button.type === "equals"
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90 dark:bg-primary dark:text-slate-950"
                    : button.type === "action"
                      ? "bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700";

              return (
                <button
                  key={`${button.label}-${button.value}`}
                  type="button"
                  onClick={() => handleButtonClick(button)}
                  className={[
                    "flex aspect-square items-center justify-center rounded-2xl text-brand-20 transition duration-200 active:scale-95",
                    buttonStyle,
                    button.className,
                    button.className === "col-span-2"
                      ? "aspect-auto min-h-16 justify-start px-7"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {button.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between px-5 pb-4 pt-1 text-brand-12 text-slate-400">
            <span>Keyboard supported</span>

            <button
              type="button"
              onClick={deleteLastCharacter}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-secondary dark:hover:bg-slate-800 dark:hover:text-primary"
            >
              Delete
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-brand-12 text-slate-400">
          Press Escape to clear and Enter to calculate
        </p>
      </div>
    </section>
  );
}

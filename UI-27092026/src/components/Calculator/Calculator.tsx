import { useState } from "react";

interface CalculatorProps {
  className?: string;
}

const Calculator = ({ className = "" }: CalculatorProps) => {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waiting, setWaiting] = useState(false);

  const inputNumber = (value: string) => {
    if (waiting) {
      setDisplay(value);
      setWaiting(false);
      return;
    }

    setDisplay(display === "0" ? value : `${display}${value}`);
  };

  const inputDecimal = () => {
    if (waiting) {
      setDisplay("0.");
      setWaiting(false);
      return;
    }

    if (!display.includes(".")) setDisplay(`${display}.`);
  };

  const calculate = (first: number, second: number, op: string) => {
    switch (op) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "×":
        return first * second;
      case "÷":
        return second === 0 ? 0 : first / second;
      default:
        return second;
    }
  };

  const inputOperator = (nextOperator: string) => {
    const current = Number(display);

    if (previous !== null && operator && !waiting) {
      const result = calculate(previous, current, operator);
      setDisplay(String(result));
      setPrevious(result);
    } else {
      setPrevious(current);
    }

    setOperator(nextOperator);
    setWaiting(true);
  };

  const handleEqual = () => {
    if (previous === null || !operator) return;

    const result = calculate(previous, Number(display), operator);
    setDisplay(String(result));
    setPrevious(null);
    setOperator(null);
    setWaiting(true);
  };

  const clear = () => {
    setDisplay("0");
    setPrevious(null);
    setOperator(null);
    setWaiting(false);
  };

  const buttons = [
    { label: "C", action: clear, className: "bg-gray-200 text-gray-900" },
    { label: "÷", action: () => inputOperator("÷"), className: "bg-orange-500 text-white" },
    { label: "×", action: () => inputOperator("×"), className: "bg-orange-500 text-white" },
    { label: "−", action: () => inputOperator("-"), className: "bg-orange-500 text-white" },
    { label: "7", action: () => inputNumber("7") },
    { label: "8", action: () => inputNumber("8") },
    { label: "9", action: () => inputNumber("9") },
    { label: "+", action: () => inputOperator("+"), className: "bg-orange-500 text-white" },
    { label: "4", action: () => inputNumber("4") },
    { label: "5", action: () => inputNumber("5") },
    { label: "6", action: () => inputNumber("6") },
    { label: "=", action: handleEqual, className: "row-span-2 bg-blue-600 text-white" },
    { label: "1", action: () => inputNumber("1") },
    { label: "2", action: () => inputNumber("2") },
    { label: "3", action: () => inputNumber("3") },
    { label: "0", action: () => inputNumber("0"), className: "col-span-2" },
    { label: ".", action: inputDecimal },
  ];

  return (
    <div className={`calculator w-full max-w-xs rounded-2xl bg-gray-900 p-4 shadow-xl ${className}`}>
      <div className="calculator__display mb-3 flex h-16 items-center justify-end overflow-hidden rounded-xl bg-gray-800 px-4 text-2xl font-semibold text-white">{display}</div>
      <div className="calculator__buttons grid grid-cols-4 gap-2">
        {buttons.map((button) => (
          <button key={button.label} type="button" onClick={button.action} className={`calculator__button flex h-12 items-center justify-center rounded-lg bg-gray-700 text-base font-semibold text-white transition hover:opacity-80 ${button.className ?? ""}`}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
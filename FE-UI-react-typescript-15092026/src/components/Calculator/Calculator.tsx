import { useEffect, useState } from "react";
import { Delete, Divide, Minus, Plus, X } from "lucide-react";

import "./Calculator.css";

type Operator = "+" | "-" | "*" | "/" | null;

interface CalculatorButton {
  label: string;
  value: string;
  type: "number" | "operator" | "action" | "equals";
}

const buttons: CalculatorButton[] = [
  {
    label: "AC",
    value: "clear",
    type: "action",
  },
  {
    label: "±",
    value: "toggle",
    type: "action",
  },
  {
    label: "%",
    value: "%",
    type: "action",
  },
  {
    label: "÷",
    value: "/",
    type: "operator",
  },

  {
    label: "7",
    value: "7",
    type: "number",
  },
  {
    label: "8",
    value: "8",
    type: "number",
  },
  {
    label: "9",
    value: "9",
    type: "number",
  },
  {
    label: "×",
    value: "*",
    type: "operator",
  },

  {
    label: "4",
    value: "4",
    type: "number",
  },
  {
    label: "5",
    value: "5",
    type: "number",
  },
  {
    label: "6",
    value: "6",
    type: "number",
  },
  {
    label: "−",
    value: "-",
    type: "operator",
  },

  {
    label: "1",
    value: "1",
    type: "number",
  },
  {
    label: "2",
    value: "2",
    type: "number",
  },
  {
    label: "3",
    value: "3",
    type: "number",
  },
  {
    label: "+",
    value: "+",
    type: "operator",
  },

  {
    label: "0",
    value: "0",
    type: "number",
  },
  {
    label: ".",
    value: ".",
    type: "number",
  },
  {
    label: "⌫",
    value: "backspace",
    type: "action",
  },
  {
    label: "=",
    value: "=",
    type: "equals",
  },
];

const formatNumber = (value: number): string => {
  if (!Number.isFinite(value)) {
    return "Error";
  }

  return Number.isInteger(value)
    ? String(value)
    : String(Number(value.toFixed(10)));
};

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const calculate = (
    firstValue: number,
    secondValue: number,
    selectedOperator: Operator,
  ): number => {
    switch (selectedOperator) {
      case "+":
        return firstValue + secondValue;

      case "-":
        return firstValue - secondValue;

      case "*":
        return firstValue * secondValue;

      case "/":
        if (secondValue === 0) {
          return NaN;
        }

        return firstValue / secondValue;

      default:
        return secondValue;
    }
  };

  const handleNumber = (value: string) => {
    if (display === "Error") {
      setDisplay(value);
      return;
    }

    if (waitingForOperand) {
      setDisplay(value);
      setWaitingForOperand(false);
      return;
    }

    if (value === "." && display.includes(".")) {
      return;
    }

    if (display === "0" && value !== ".") {
      setDisplay(value);
      return;
    }

    if (display.length >= 15) {
      return;
    }

    setDisplay((current) => current + value);
  };

  const handleOperator = (nextOperator: Operator) => {
    const inputValue = Number(display);

    if (display === "Error") {
      return;
    }

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);

      setDisplay(formatNumber(result));
      setPreviousValue(result);
    }

    setOperator(nextOperator);
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (previousValue === null || operator === null || display === "Error") {
      return;
    }

    const inputValue = Number(display);

    const result = calculate(previousValue, inputValue, operator);

    setDisplay(formatNumber(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const handleBackspace = () => {
    if (display === "Error" || waitingForOperand || display.length === 1) {
      setDisplay("0");
      return;
    }

    setDisplay((current) => current.slice(0, -1));
  };

  const handleToggle = () => {
    if (display === "0" || display === "Error") {
      return;
    }

    setDisplay((current) =>
      current.startsWith("-") ? current.slice(1) : `-${current}`,
    );
  };

  const handlePercentage = () => {
    if (display === "Error") {
      return;
    }

    const value = Number(display);

    setDisplay(formatNumber(value / 100));
  };

  const handleButton = (button: CalculatorButton) => {
    switch (button.type) {
      case "number":
        handleNumber(button.value);
        break;

      case "operator":
        handleOperator(button.value as Operator);
        break;

      case "equals":
        handleEquals();
        break;

      case "action":
        switch (button.value) {
          case "clear":
            handleClear();
            break;

          case "backspace":
            handleBackspace();
            break;

          case "toggle":
            handleToggle();
            break;

          case "%":
            handlePercentage();
            break;
        }

        break;
    }
  };

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      const { key } = event;

      if (/^[0-9.]$/.test(key)) {
        handleNumber(key);
        return;
      }

      if (["+", "-", "*", "/"].includes(key)) {
        handleOperator(key as Operator);
        return;
      }

      if (key === "Enter" || key === "=") {
        handleEquals();
        return;
      }

      if (key === "Escape") {
        handleClear();
        return;
      }

      if (key === "Backspace") {
        handleBackspace();
        return;
      }

      if (key === "%") {
        handlePercentage();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  });

  const getButtonIcon = (value: string) => {
    switch (value) {
      case "+":
        return <Plus size={22} />;

      case "-":
        return <Minus size={22} />;

      case "*":
        return <X size={20} />;

      case "/":
        return <Divide size={20} />;

      case "backspace":
        return <Delete size={20} />;

      default:
        return null;
    }
  };

  return (
    <main className="calculator-page">
      <div className="calculator-container">
        {/* Heading */}

        <header className="calculator-heading">
          <span>UI COMPONENT</span>

          <h1>
            Modern <strong>Calculator</strong>
          </h1>

          <p>
            A responsive calculator component built with React, TypeScript and
            Tailwind CSS.
          </p>
        </header>

        {/* Calculator */}

        <section className="calculator">
          {/* Display */}

          <div className="calculator-display">
            <div className="calculator-operation">
              {previousValue !== null && operator
                ? `${formatNumber(previousValue)} ${operator}`
                : ""}
            </div>

            <div
              className={`calculator-value ${
                display === "Error" ? "calculator-error" : ""
              }`}
            >
              {display}
            </div>
          </div>

          {/* Buttons */}

          <div className="calculator-buttons">
            {buttons.map((button) => (
              <button
                key={button.value}
                type="button"
                className={`calculator-button calculator-button-${button.type}`}
                onClick={() => handleButton(button)}
                aria-label={
                  button.value === "backspace" ? "Backspace" : button.label
                }
              >
                {getButtonIcon(button.value) ?? button.label}
              </button>
            ))}
          </div>
        </section>

        {/* Keyboard Hint */}

        <div className="calculator-hint">
          <span>KEYBOARD</span>

          <p>
            Use your keyboard to calculate · <kbd>Enter</kbd> equals ·{" "}
            <kbd>Esc</kbd> clear
          </p>
        </div>
      </div>
    </main>
  );
};

export default Calculator;

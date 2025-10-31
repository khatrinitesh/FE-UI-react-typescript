import { useStore } from "./../store/useStore";

const Counter = () => {
  const { count, decrement, increment, reset } = useStore();
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

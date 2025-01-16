import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-8 text-center">
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
          aria-label="Decrease count"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          aria-label="Increase count"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

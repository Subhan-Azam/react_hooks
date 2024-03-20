"use client";
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-5">
      <p>Count: {count}</p>
      <button className="font-bold text-blue"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          (count !== 0) && setCount(count - 1);
        }}    
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

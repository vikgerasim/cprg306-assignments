"use client";

import { useState } from "react";

export default function NewItem() {

  const [count, setCount] = useState(1);

  return (
    <div className="flex justify-center pt-5">
      <div className="flex flex-row bg-white rounded p-2">
        <span className="mr-5 w-10 h-10 text-center leading-10">
          {count}
        </span>
        <button
          className="bg-blue-600 text-white rounded mr-2 w-10 h-10 hover:bg-blue-400 active:bg-blue-500 disabled:bg-gray-400"
          onClick={() => count < 20 && setCount(count + 1)}
          disabled={count >= 20 ? true : false}
        >
          +
        </button>
        <button
          className="bg-red-600 text-white rounded mr-2 w-10 h-10 hover:bg-red-400 active:bg-red-500 disabled:bg-gray-400"
          onClick={() => count > 1 && setCount(count - 1)}
          disabled={count <= 1 ? true : false}
        >
          -
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function NewItem() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Added item: ${name}, quantity: ${count}, category: ${category}`);

    let item = {
      itemName: name,
      itemQuantity: count,
      itemCategory: category,
    };

    alert(`Added item: ${name}, quantity: ${count}, category: ${category}`);

    setName("");
    setCategory("produce");
    setCount(1);
  };

  return (
    <div className="flex justify-center pt-5">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <div className="mb-3">
          <input
            type="text"
            onChange={() => setName(event.target.value)}
            value={name}
            required
            placeholder="Item Name"
            className="w-80 h-10 px-2 py-0.5 rounded border border-double focus:bg-gray-200"
          />
        </div>
        <div className="flex">
          <div className="flex justify-center">
            <div className="flex flex-row bg-white rounded p-2 mr-0.5">
              <span className="mr-3 w-10 h-10 text-center leading-10">
                {count}
              </span>

              <button
                type="button"
                className="bg-blue-600 text-white rounded mr-2 w-10 h-10 hover:bg-blue-400 active:bg-blue-500 disabled:bg-gray-400"
                onClick={() => count < 20 && setCount(count + 1)}
                disabled={count >= 20 ? true : false}
              >
                +
              </button>

              <button
                type="button"
                className="bg-red-600 text-white rounded w-10 h-10 hover:bg-red-400 active:bg-red-500 disabled:bg-gray-400"
                onClick={() => count > 1 && setCount(count - 1)}
                disabled={count <= 1 ? true : false}
              >
                -
              </button>
            </div>
          </div>
          <div className="ml-4">
            <select
              onChange={() => setCategory(event.target.value)}
              value={category}
              className="px-2 h-14 rounded border focus:bg-gray-200"
            >
              <option disabled value="">
                Category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="h-10 bg-blue-600 text-white rounded mt-3 hover:bg-blue-400 active:bg-blue-500"
        >
          +
        </button>
      </form>
    </div>
  );
}

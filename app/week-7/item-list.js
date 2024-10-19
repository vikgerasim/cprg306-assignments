"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  
  const itemsData = items.map((item) => ({ ...item }));

  const [sortBy, setSortBy] = useState("name");

  itemsData.sort((a, b) => {
    let valueA = a[sortBy].toUpperCase();
    let valueB = b[sortBy].toUpperCase();
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <div className="flex items-center space-x-2">
        <p className="ml-5">Sort by:</p>
        <button
          className={`px-4 py-2 rounded hover:bg-blue-400 active:bg-blue-700 ${
            sortBy === "name"
              ? "bg-blue-700 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 rounded hover:bg-blue-400 active:bg-blue-700 ${
            sortBy === "category"
              ? "bg-blue-700 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      {itemsData.map((item, id) => (
        <Item key={id} item={item} />
      ))}
    </div>
  );
}

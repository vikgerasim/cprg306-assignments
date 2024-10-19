"use client";

import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import { useState } from "react";

export default function PageWeek7() {
  let itemsArray = itemsData.map((item) => ({ ...item }));
  const [itemsList, setItemsList] = useState(itemsArray);

  const handleAddItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  };

  return (
    <main className="bg-black text-white w-full min-h-screen">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={itemsList} />
    </main>
  );
}

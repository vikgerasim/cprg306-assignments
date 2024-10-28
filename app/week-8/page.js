"use client";

import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { useState } from "react";

export default function PageWeek7() {
  let itemsArray = itemsData.map((item) => ({ ...item }));

  const [itemsList, setItemsList] = useState(itemsArray);

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  };

  const handleItemSelect = (selectedItem) => {
    setSelectedItemName(
      selectedItem.name
        .split(/[,]/)[0]
        .replace(/[^\w\s,.]/g, "")
        .trim()
    );
  };

  return (
    <main className="bg-black text-white w-full min-h-screen">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={itemsList} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

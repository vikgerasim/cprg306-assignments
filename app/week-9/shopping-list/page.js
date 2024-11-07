"use client";

import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function PageWeek7() {
  const { user } = useUserAuth();

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
      {user ? (
        <div>
          <h1 className="text-3xl font-bold p-2">Shopping List</h1>
          <div className="flex">
            <div>
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={itemsList} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      ) : (
        <div>
          <p>You must be signed in to view this page!</p>
          <Link className="hover: underline hover:text-green-500" href="/week-9/">Click here to return to the sign in page</Link>
        </div>
      )}
    </main>
  );
}

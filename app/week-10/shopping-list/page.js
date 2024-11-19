"use client";

import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function PageWeek10() {
  const { user } = useUserAuth();

  const [itemsList, setItemsList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        const newItemWithId = { ...newItem, id: newItemId };
        setItemsList([...itemsList, newItemWithId]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };

  const handleItemSelect = (selectedItem) => {
    setSelectedItemName(
      selectedItem.name
        .split(/[,]/)[0]
        .replace(/[^\w\s,.]/g, "")
        .trim()
    );
  };

  const loadItems = async () => {
    if (user) {
      try {
        const items = await getItems(user.uid);
        setItemsList(items);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

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
          <Link
            className="hover: underline hover:text-green-500"
            href="/week-10/"
          >
            Click here to return to the sign in page
          </Link>
        </div>
      )}
    </main>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        console.log(response.statusText);
      }
      const data = await response.json();
      if (data.meals !== null) {
        let mealsList = [...data.meals];
        setMeals(mealsList);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  const loadMealIdeas = () => {
    fetchMealIdeas(ingredient);
  };

  useEffect(() => {
    (async () => {
      if (ingredient !== "") {
        loadMealIdeas();
      }
    })();
  }, [ingredient]);

  return (
    <section>
      <h1 className="text-xl font-bold">Meal Ideas</h1>
      {ingredient === "" && <p>Select an item to see meal ideas</p>}
      {meals.length === 0 && ingredient !== "" && (
        <p>No meal ideas found for {ingredient}</p>
      )}
      {meals.length > 0 && <p>Here are some meal ideas using {ingredient}:</p>}
      {meals.map((meal) => (
        <div className="bg-gray-800 my-1 w-96 p-1.5" key={meal.idMeal}>
          {meal.strMeal}
        </div>
      ))}
    </section>
  );
}
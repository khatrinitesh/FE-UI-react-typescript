import { useEffect, useState } from "react";
import { getFoodNutrition } from "../api/apiNutrition";
import FoodCard from "../components/FoodCard";
import type { FoodNutritionResponse } from "../interfaces/nutrition";

export default function SectionNutrition() {
      const [food, setFood] = useState<FoodNutritionResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

     useEffect(() => {
    const fetchFood = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getFoodNutrition("broccoli-raw");

        setFood(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch food nutrition.");
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!food) {
    return null;
  }
  return (
    <>
     <FoodCard data={food} /></>
  )
}

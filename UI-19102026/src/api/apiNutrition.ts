import axios from "axios";
import type { FoodNutritionResponse } from "../interfaces/nutrition";

const API_URL = import.meta.env.VITE_NUTRITION_API;

export const getFoodNutrition = async (
  slug: string
): Promise<FoodNutritionResponse> => {
  const response = await axios.get<FoodNutritionResponse>(
    `${API_URL}/foods/${slug}.json`
  );

  return response.data;
};
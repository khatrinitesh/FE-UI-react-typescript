export interface Food {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  groupName: string;
  groupId: number;
  sourceDatabase: string;
  sourceUrl: string;
}

export interface Nutrient {
  nutrientId: number;
  name: string;
  amount: number;
  unit: string;
  perAmount: number;
  dailyValue: number | null;
  upperLimit: number | null;
  sortOrder: number;
  categoryName: string;
}

export interface ServingSize {
  id: number;
  amountGrams: number;
  isDefault: boolean;
  description: string;
}

export interface Meta {
  perAmount: number;
  perAmountUnit: string;
  locale: string;
  source: string;
}

export interface FoodNutritionResponse {
  food: Food;
  nutrients: Nutrient[];
  servingSizes: ServingSize[];
  meta: Meta;
}
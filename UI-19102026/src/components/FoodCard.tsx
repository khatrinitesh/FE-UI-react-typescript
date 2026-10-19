import type { FoodNutritionResponse } from "../interfaces/nutrition";


interface FoodCardProps {
  data: FoodNutritionResponse;
}

const FoodCard = ({ data }: FoodCardProps) => {
  const { food, nutrients, servingSizes } = data;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {food.name}
        </h1>

        <p className="mt-2 text-gray-500">
          {food.groupName}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Nutrition values per 100 g
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nutrients.map((nutrient,index) => (
          <div
            key={nutrient.nutrientId}
            className="rounded-lg border p-4"
          >
            <h2 className="font-semibold">
              <span style={{color:'#ff0000'}}>{index + 1} </span>- {nutrient.name}
            </h2>

            <p className="mt-2 text-2xl font-bold">
              {nutrient.amount} {nutrient.unit}
            </p>

            {nutrient.dailyValue !== null && (
              <p className="mt-1 text-sm text-gray-500">
                Daily value: {nutrient.dailyValue}
                {nutrient.unit}
              </p>
            )}
          </div>
        ))}
      </div>

      {servingSizes.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold">
            Serving Sizes
          </h2>

          <div className="space-y-2">
            {servingSizes.map((serving) => (
              <div
                key={serving.id}
                className="flex justify-between rounded border p-3"
              >
                <span>{serving.description}</span>

                <span className="font-medium">
                  {serving.amountGrams} g
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
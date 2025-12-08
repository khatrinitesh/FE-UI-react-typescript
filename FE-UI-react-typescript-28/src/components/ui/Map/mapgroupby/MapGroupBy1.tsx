type Fruit = {
  name: string;
  type: string;
};

function groupBy<T, K extends keyof any>(
  array: T[],
  getKey: (item: T) => K
): Map<K, T[]> {
  const map = new Map<K, T[]>();
  array.forEach((item) => {
    const key = getKey(item);
    const group = map.get(key);
    if (group) {
      group.push(item);
    } else {
      map.set(key, [item]);
    }
  });
  return map;
}

const MapGroupBy1 = () => {
  const fruits: Fruit[] = [
    { name: "Orange", type: "citrus" },
    { name: "Lemon", type: "citrus" },
    { name: "Strawberry", type: "berry" },
    { name: "Blueberry", type: "berry" },
    { name: "Banana", type: "tropical" },
  ];

  const grouped = groupBy(fruits, (fruit) => fruit.type);

  return (
    <div>
      {Array.from(grouped.entries()).map(([type, items]) => (
        <div key={type}>
          <h4>{type}</h4>
          <ul>
            {items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MapGroupBy1;

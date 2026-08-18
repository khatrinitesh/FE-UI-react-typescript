interface ProductFilterProps {
  search: string;
  category: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function ProductFilter({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">
      <input
        type="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg border px-4 py-3 outline-none focus:border-black"
      />

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="rounded-lg border px-4 py-3 outline-none focus:border-black"
      >
        <option value="">All Categories</option>

        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

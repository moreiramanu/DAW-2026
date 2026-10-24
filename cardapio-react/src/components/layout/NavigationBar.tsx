import type { Category } from "../../data/categories";

type NavigationBarProps = {
  categories: Category[]
  activeCategory: string
  onSelectCategory: (category: string) => void
};

export function NavigationBar({ categories, activeCategory, onSelectCategory }: NavigationBarProps) {
  return (
    <nav>
      <ul className="container">
        {categories.map((category) => (
          <li>
            <button type="button" className={category.alias === activeCategory ? "active" : ""} onClick={() => onSelectCategory(category.alias)}>
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
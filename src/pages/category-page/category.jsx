import { CategoryFilter } from "../../assets/components/category-page/category-filter";

export function CategoryPage() {
  return (
    <div>
      <div className="container">
        {/* { FOR BREADCRUMB} */}
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-start-1 col-end-4">
            <CategoryFilter />
          </div>
          <div className="col-start-4 col-end-13"></div>
        </div>
      </div>
    </div>
  );
}

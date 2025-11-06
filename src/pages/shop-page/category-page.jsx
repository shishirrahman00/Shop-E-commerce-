import { CategoryFilter } from "../../components/category-page/category-filter";
import { CategoryProducts } from "../../components/category-page/category-products";

export function CategoryPage() {
  return (
    <div>
      <div className="container px-5 xl:px-0">
        <div className="py-5 border-t border-black/10">
          <h1>BREADCRUMB</h1>
        </div>
        <div className="grid grid-cols-12 gap-x-4">
          <div className="xl:col-start-1 xl:col-end-4 col-start-1 col-end-13">
            <CategoryFilter />
          </div>
          <div className="xl:col-start-4 xl:col-end-13 col-start-1 col-end-13">
            <CategoryProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

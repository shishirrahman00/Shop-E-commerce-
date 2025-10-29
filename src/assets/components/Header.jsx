import { Link } from "react-router-dom";
import { SearchProduct } from "./search-product";
export function Header() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-center gap-x-10 ">
        <div>
          <Link to="/">
            <h1 className="text-[32px] ">SHOP.CO</h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-x-6">
          <li>
            <Link
              to="/checkoutcart"
              className="text-base hover:text-opacity-[40%] inline-flex items-center justify-center gap-x-1"
            >
              Shop
              <img src="/icons/Frame.svg" alt="drop icon" />
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base hover:text-opacity-[40%]">
              On Sale
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-base hover:text-opacity-[40%]">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-base hover:text-opacity-[40%]">
              Brands
            </Link>
          </li>
        </ul>
        <SearchProduct />

        <div className="flex items-center justify-center gap-x-[14px]">
          <span>
            <img src="/icons/cart.svg" alt="cart icon" />
          </span>
          <span>
            <img src="/icons/login.svg" alt="profile icon" />
          </span>
        </div>
      </div>
    </div>
  );
}

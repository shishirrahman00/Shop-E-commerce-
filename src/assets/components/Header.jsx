import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-center gap-x-10">
        <div>
          <h1 className="text-[32px] ">SHOP.CO</h1>
        </div>
        <ul className="flex items-center justify-center gap-x-6">
          <li>
            <Link
              to="/"
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
              Case Study
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-base hover:text-opacity-[40%]">
              Blog
            </Link>
          </li>
        </ul>
        <div className="flex-1 relative ">
          <span className="  absolute top-1/2 -translate-y-1/2 left-4">
            <img src="/icons/search.svg" alt="search icon" />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full text-[#000] placeholder:text-base placeholder:text-[#000000] placeholder:opacity-[40%] outline-none bg-[#F0F0F0] py-3 rounded-full pl-[52px] pr-10"
          />
        </div>
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

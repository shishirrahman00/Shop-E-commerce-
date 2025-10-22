import { Link } from "react-router-dom";

export function CategoryFilter() {
  return (
    <div className="border border-black/10 rounded-[20px] px-6 py-5">
      {/* Filter Title Start */}
      <div className="flex items-center justify-between border-b border-b-black/10 pb-6">
        <h3 className="font-Satoshi-bold text-[20px] leading-[1]">Filter</h3>
        <span>
          <img src="/icons/filter-icon.svg" alt="filter-icon" />
        </span>
      </div>
      {/* Filter Title END */}
      {/* Products type Start */}
      <div className="py-6 border-b border-b-black/10">
        <ul className="flex flex-col gap-y-5 ">
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              T-shirt
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Shorts
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Shirt
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Hoodie
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Jeans
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
        </ul>
      </div>
      {/* Products type END */}
      {/* Price Range Start */}
      <div className="py-6 border-b border-b-black/10">
        <div className="flex items-center justify-between  ">
          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">Price</h3>
          <button>
            <img src="/icons/up-angle.svg" alt="up-angle arrow" />
          </button>
        </div>
      </div>
      {/* Price Range End */}
      {/* Color selection Start */}
      <div className="py-6 border-b border-b-black/10">
        <div className="flex items-center justify-between  ">
          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">Colors</h3>
          <button>
            <img src="/icons/up-angle.svg" alt="up-angle arrow" />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-x-[6px] gap-y-4 pt-5">
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#00C12B]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#06CAF5]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F50606]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F57906]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F5DD06]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#000000]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#063AF5]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#7D06F5]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F506A4]"></span>
          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#FFFFFF]"></span>
        </div>
      </div>
      {/* Color selection End */}
      {/* Size selection Start */}
      <div className="py-6 border-b border-b-black/10">
        <div className="flex items-center justify-between  ">
          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">Size</h3>
          <button>
            <img src="/icons/up-angle.svg" alt="up-angle arrow" />
          </button>
        </div>
        <div className="flex flex-wrap gap-x-[6px] gap-y-2 pt-5">
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            XX-Small
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            X-Small
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            Small
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            Medium
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            Large
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            X-Large
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            XX-Large
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            3X-Large
          </button>
          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
            4X-Large
          </button>
        </div>
      </div>
      {/* Size selection End */}
      {/* Dress Style Start */}
      <div className="py-6">
        <div className="flex items-center justify-between  ">
          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">
            Dress Style
          </h3>
          <button>
            <img src="/icons/up-angle.svg" alt="up-angle arrow" />
          </button>
        </div>

        <ul className="flex flex-col gap-y-5 pt-5 ">
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Casual
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Formal
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Party
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
              Gym
              <img src="/icons/right-angle.svg" alt="right-arrow icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Dress Style End */}

      <button className="bg-black text-white font-Satoshi-medium text-sm leading-[1] w-full py-[14px] border border-black rounded-[62px] hover:bg-black/60 hover:border-transparent transition-all duration-300 cursor-pointer">
        Apply Filter
      </button>
    </div>
  );
}

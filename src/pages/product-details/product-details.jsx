import { useLoaderData } from "react-router-dom";

export function ProductDetails() {
  const { singleProduct } = useLoaderData();
  return (
    <div className="container">
      <div>
        <h1>breadcrumb</h1>
      </div>
      <div className="grid grid-cols-12 gap-x-10">
        <div className="col-start-1 col-end-7">
          <div>
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>
        <div className="col-start-7 col-end-13">
          {/* PRODUCT TITLE START */}
          <div className="border-b border-black/10 pb-6">
            <h1 className="text-[40px] font-Integral-bold leading-[1] mb-[14px]">
              {singleProduct.title}
            </h1>
            <p className="font-Satoshi-regular text-base mb-[14px]">
              Rating: {singleProduct.rating}/<span>5</span>
            </p>
            <p className="font-Satoshi-bold text-[40px] leading-[1] mb-[14px]">
              ${singleProduct.price}
            </p>
            <p className="font-Satoshi-regular text-base leading-[22px] text-black/60">
              {singleProduct.description}
            </p>
          </div>
          {/* PRODUCT TITLE END */}
          {/* PRODUCT COLOR START */}
          <div className="border-b border-black/10 py-6">
            <p className="text-base text-black/60 leading-[1]">Select Colors</p>
            <div className="flex items-center gap-x-4 mt-4">
              <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#31344F]"></span>
              <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#314F4A]"></span>
              <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#4F4631]"></span>
            </div>
          </div>
          {/* PRODUCT COLOR END */}

          {/* PRODUCT SIZE  START */}
          <div className="border-b border-black/10 py-6">
            <p className="text-base text-black/60 leading-[1]">Choose Size</p>
            <div className="flex items-center gap-x-3 mt-4">
              <button className="inline-flex items-center justify-center font-Satoshi-regular text-base leading-[1] text-black/60 bg-[#F0F0F0] border border-black/10 px-6 py-3 rounded-[20px] hover:bg-black hover:text-white hover:border-white  transition-all duration-300 cursor-pointer">
                Small
              </button>
              <button className="inline-flex items-center justify-center font-Satoshi-regular text-base leading-[1] text-black/60 bg-[#F0F0F0] border border-black/10 px-6 py-3 rounded-[20px] hover:bg-black hover:text-white hover:border-white  transition-all duration-300 cursor-pointer">
                Medium
              </button>
              <button className="inline-flex items-center justify-center font-Satoshi-regular text-base leading-[1] text-black/60 bg-[#F0F0F0] border border-black/10 px-6 py-3 rounded-[20px] hover:bg-black hover:text-white hover:border-white  transition-all duration-300 cursor-pointer">
                Large
              </button>
              <button className="inline-flex items-center justify-center font-Satoshi-regular text-base leading-[1] text-black/60 bg-[#F0F0F0] border border-black/10 px-6 py-3 rounded-[20px] hover:bg-black hover:text-white hover:border-white  transition-all duration-300 cursor-pointer">
                X-Large
              </button>
            </div>
          </div>
          {/* PRODUCT SIZE END */}
          {/* PRODUCT QUANTITY AND ADD TO CART START */}
          <div className="flex items-center gap-x-5 pt-6">
            <div className="inline-flex max-w-[170px] flex-none items-center rounded-full bg-[#F0F0F0] px-5 py-3.5">
              <button className="cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
              <input
                type="number"
                className="w-full grow-1 border-0 bg-transparent px-2 py-0 text-center font-Satoshi-medium text-base  text-black outline-none  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
              />
              <button className="cursor-pointer">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center w-full py-3.5 rounded-[62px] font-Satoshi-medium  bg-black text-white cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
          {/* PRODUCT QUANTITY AND ADD TO CART END */}
        </div>
      </div>
    </div>
  );
}

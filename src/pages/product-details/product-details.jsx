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
        </div>
      </div>
    </div>
  );
}

import { useLoaderData, useNavigate } from "react-router-dom";

export function CategoryProducts() {
  const productData = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div></div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-9">
          {productData.products.map((item) => {
            return (
              <div
                key={item.id}
                className=""
                onClick={() => {
                  navigate(`/productdetails/${item.id}`);
                }}
              >
                <div className="">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full object-cover bg-[#F0EEED] rounded-[20px] mb-4"
                  />
                </div>
                <div>
                  <h3 className="font-Satoshi-bold text-[20px] leading-[1] text-black mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-Satoshi-regular text-sm text-black mb-2">
                    Rating: {item.rating}/
                    <span className="text-black/60">5</span>
                  </p>
                  <p className="font-Satoshi-bold text-[20px] leading-[1] ">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

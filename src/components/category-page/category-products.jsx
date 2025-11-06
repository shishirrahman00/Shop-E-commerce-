import { ADD_TO_CART } from "@/actions/action";
import { ProductContext } from "@/context/product-context";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export function CategoryProducts() {
  const productData = useLoaderData();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  return (
    <div>
      <div className="container">
        <div></div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-9">
          {productData.products.map((item) => {
            return (
              <div key={item.id} className="group cursor-pointer">
                <div className=" relative overflow-hidden">
                  <img
                    onClick={() => {
                      navigate(`/productdetails/${item.id}`);
                    }}
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 bg-[#F0EEED] rounded-[20px] mb-4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4  transition-transform  translate-y-full group-hover:translate-y-0 duration-500">
                    <button
                      onClick={() => {
                        return dispatch({
                          type: ADD_TO_CART,
                          payload: {
                            ...item,
                            quantity: 1,
                          },
                        });
                      }}
                      className="w-full py-3 bg-black text-base text-white border border-white/10 rounded-[62px] inline-flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
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

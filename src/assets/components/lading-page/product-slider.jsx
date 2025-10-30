import { ADD_TO_CART } from "@/actions/action";
import { ProductContext } from "@/context/product-context";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function ProductSlider() {
  const productData = useLoaderData();
  const { dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  let settings = {
    // autoplay: true,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    // centerPadding: "20px",
  };

  return (
    <div>
      <Slider {...settings}>
        {productData?.products.map((it) => {
          return (
            <div
              key={it.id}
              className="items-center w-full pl-5 cursor-pointer group"
            >
              <div className="bg-[#F0EEED] rounded-[20px] mb-3 relative overflow-hidden">
                <img
                  src={it.thumbnail}
                  alt={it.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onClick={() => {
                    navigate(`/productdetails/${it.id}`);
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4  translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button
                    onClick={() => {
                      return dispatch({
                        type: ADD_TO_CART,
                        payload: {
                          ...it,
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
              <div className="text-center">
                <h1 className="font-Satoshi-bold text-[20px] leading-[1] mb-2 line-clamp-1">
                  {it.title}
                </h1>
                <p className="text-sm mb-2">
                  Rating : {it.rating}/<span className="text-black/60">5</span>
                </p>
                <p className="font-Satoshi-bold text-2xl">${it.price}</p>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="flex items-center justify-center mt-7">
        <button
          onClick={() => {
            navigate("/shop");
          }}
          className="cursor-pointer text-base font-Satoshi-medium leading-[1] border border-black/10 text-black py-[15px] px-10 rounded-[62px] bg-white hover:bg-black hover:text-white  transition-all duration-300"
        >
          View All
        </button>
      </div>
    </div>
  );
}

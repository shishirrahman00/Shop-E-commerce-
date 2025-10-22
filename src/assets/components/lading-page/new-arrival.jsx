import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export function NewArrival() {
  const productData = useLoaderData();
  let settings = {
    // autoplay: true,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    centerPadding: "20px",
  };
  return (
    <div className="py-[62px]">
      <div className="container">
        <h1 className="uppercase text-center text-5xl mb-[52px] ">
          New Arrival
        </h1>
        <div className="flex flex-col gap-x-5">
          <Slider {...settings}>
            {productData?.products.map((it) => {
              return (
                <div key={it.id} className=" items-center w-full  ">
                  <div className="bg-[#F0EEED]">
                    <img src={it.thumbnail} alt={it.title} />
                  </div>
                  <div className="text-center">
                    <h1>{it.title}</h1>
                    <p>
                      rating : <span>{it.rating}</span>
                    </p>
                    <p>${it.price}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

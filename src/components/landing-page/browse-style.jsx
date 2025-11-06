import { Link } from "react-router-dom";

export function BrowseStyle() {
  return (
    <div>
      <div className="container bg-[#F0F0F0] rounded-[40px] py-[70px] xl:px-16 md:px-14 px-6">
        <div>
          <h1 className="text-[32px] leading-9 lg:text-5xl lg:leading-11  text-center mb-16">
            Browse BY CateGory
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-x-5 gap-y-5 mb-5">
          <div className="xl:col-start-1 xl:col-end-5 col-start-1 col-end-13">
            <div className="relative ">
              <Link to="/">
                <img
                  src="/images/beauty.png"
                  alt="Casual"
                  className=" w-full h-[290px] rounded-[20px]  bg-white object-cover"
                />
              </Link>
              <div className="absolute top-6 left-9">
                <h2 className="font-Satoshi-bold text-4xl text-white">
                  Beauty
                </h2>
              </div>
            </div>
          </div>
          <div className="xl:col-start-5 xl:col-end-13 col-start-1 col-end-13">
            <div className="relative ">
              <Link to="/">
                <img
                  src="/images/furniture.png"
                  alt="Formal"
                  className=" w-full h-[290px] rounded-[20px]  bg-white object-cover"
                />
              </Link>
              <div className="absolute top-6 left-9">
                <h2 className="font-Satoshi-bold text-4xl text-white">
                  Furniture
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-5 gap-y-5">
          <div className="xl:col-start-1 xl:col-end-8 col-start-1 col-end-13">
            <div className="relative">
              <Link to="/">
                <img
                  src="/images/fragrances.png"
                  alt="fragrances"
                  className=" w-full h-[290px] rounded-[20px]  bg-white object-cover"
                />
              </Link>
              <div className="absolute top-6 left-9">
                <h2 className="font-Satoshi-bold text-4xl text-white">
                  Fragrances
                </h2>
              </div>
            </div>
          </div>
          <div className="xl:col-start-8 xl:col-end-13 col-start-1 col-end-13">
            <div className="relative">
              <Link to="/">
                <img
                  src="/images/groceries.png"
                  alt="Formal"
                  className=" w-full h-[290px] rounded-[20px]  bg-white object-cover"
                />
              </Link>
              <div className="absolute top-6 left-9">
                <h2 className="font-Satoshi-bold text-4xl text-white">
                  Groceries
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

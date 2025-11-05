import { useNavigate } from "react-router-dom";
import { Button } from "../button";

export function HeroBanner() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F2F0F1] pt-[100px] px-4 md:px-5 xl:px-0">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-x-5">
          <div className="xl:col-start-1 xl:col-end-8 col-start-1 col-end-13">
            <div>
              <h1 className="md:text-[64px] md:leading-16 md:mb-8 mb-4 text-4xl leading-[34px]">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="font-Satoshi-regular  text-[#000] opacity-60 xl:w-[545px] text-base leading-[22px] md:mb-8 mb-6">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button
                onClick={() => {
                  return navigate("/shop");
                }}
                type={"shopNow"}
              >
                Shop Now
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 mt-12 pb-[100px]">
              <div className="border-r border-[#000]/10  pr-6">
                <span className="font-Satoshi-bold text-[40px]">200+</span>
                <p className="font-Satoshi-regular text-base leading-[22px] text-black opacity-60">
                  International Brands
                </p>
              </div>
              <div className="md:border-r border-[#000]/10  pr-6">
                <span className="font-Satoshi-bold text-[40px]">2000+</span>
                <p className="font-Satoshi-regular text-base leading-[22px] text-black opacity-60">
                  High-Quality Products
                </p>
              </div>
              <div className="">
                <span className="font-Satoshi-bold text-[40px]">30,000+</span>
                <p className="font-Satoshi-regular text-base leading-[22px] text-black opacity-60">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-start-8 xl:col-end-13 col-start-1 col-end-13">
            <div className="hidden lg:block lg:justify-items-center">
              {/* className="bg-[url(/images/landing-hero-banner.png)] bg-cover bg-no-repeat bg-center" */}
              <img
                src="/images/landing-hero-banner-profile.png"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

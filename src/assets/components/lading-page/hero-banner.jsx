import { Button } from "../button";

export function HeroBanner() {
  return (
    <div class="bg-[#F2F0F1]">
      <div class="container">
        <div class="grid grid-cols-12 items-center">
          <div class="col-start-1 col-end-8">
            <div>
              <h1 class="text-[64px] leading-16 mb-8">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p class="font-Satoshi-regular  text-[#000] opacity-60 w-[545px] text-base leading-[22px] mb-8">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button type={"shopNow"}>Shop Now</Button>
            </div>
            <div class="flex flex-wrap gap-x-6 mt-8">
              <div class="border-r border-[#000]/10  pr-6">
                <span class="font-Satoshi-bold text-[40px]">200+</span>
                <p class="font-Satoshi-regular text-base leading-[22px] text-black opacity-60">
                  International Brands
                </p>
              </div>
              <div class="border-r border-[#000]/10  pr-6">
                <span class="font-Satoshi-bold text-[40px]">2000+</span>
                <p class="font-Satoshi-regular text-base leading-[22px] text-black opacity-60">
                  High-Quality Products
                </p>
              </div>
              <div class="">
                <span class="font-Satoshi-bold text-[40px]">30,000+</span>
                <p class="font-Satoshi-regular text-base leading-[22px] text-black opacity-60">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div class="col-start-8 col-end-13">
            <div>
              {/* class="bg-[url(/images/landing-hero-banner.png)] bg-cover bg-no-repeat bg-center" */}
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

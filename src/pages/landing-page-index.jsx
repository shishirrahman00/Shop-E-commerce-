import { BrowseStyle } from "@/components/landing-page/browse-style";
import { HeroBanner } from "@/components/landing-page/hero-banner";
import { LogoBanner } from "@/components/landing-page/logo-banner";
import { ProductSlider } from "@/components/landing-page/product-slider";
import { ReviewSlider } from "@/components/landing-page/review-slider";

export function LandingPageIndex() {
  return (
    <>
      <HeroBanner />
      <LogoBanner />

      <div className="container py-[62px]  border-b border-black/10 px-5 xl:px-0">
        <h1 className="uppercase text-center text-[32px] md:text-4xl lg:text-5xl  mb-[52px] ">
          New Arrivals
        </h1>
        <ProductSlider />
      </div>

      <div className="container py-[62px] px-5 xl:px-0">
        <h1 className="uppercase text-center text-5xl mb-[52px] ">
          top selling
        </h1>
        <ProductSlider />
      </div>

      <BrowseStyle />
      <ReviewSlider />
    </>
  );
}

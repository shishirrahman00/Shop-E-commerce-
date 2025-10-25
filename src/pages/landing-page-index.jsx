import { BrowseStyle } from "../assets/components/lading-page/browse-style";
import { HeroBanner } from "../assets/components/lading-page/hero-banner";
import { LogoBanner } from "../assets/components/lading-page/logo-banner";
import { ProductSlider } from "../assets/components/lading-page/product-slider";
import { ReviewSlider } from "../assets/components/lading-page/review-slider";

export function LandingPageIndex() {
  return (
    <>
      <HeroBanner />
      <LogoBanner />
      <div>
        <div className="container py-[62px]  border-b border-black/10">
          <h1 className="uppercase text-center text-5xl mb-[52px] ">
            New Arrivals
          </h1>
          <ProductSlider />
        </div>
      </div>

      <div>
        <div className="container py-[62px]">
          <h1 className="uppercase text-center text-5xl mb-[52px] ">
            top selling
          </h1>
          <ProductSlider />
        </div>
      </div>
      <BrowseStyle />
      <ReviewSlider />
    </>
  );
}

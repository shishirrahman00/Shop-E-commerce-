import { HeroBanner } from "../assets/components/lading-page/hero-banner";
import { LogoBanner } from "../assets/components/lading-page/logo-banner";
import { Products } from "../assets/components/lading-page/products";

export default function LandingPageIndex() {
  return (
    <>
      <HeroBanner />
      <LogoBanner />
      <Products />
    </>
  );
}

import { HeroBanner } from "../assets/components/lading-page/hero-banner";
import { LogoBanner } from "../assets/components/lading-page/logo-banner";
import { NewArrival } from "../assets/components/lading-page/new-arrival";

export default function LandingPageIndex() {
  return (
    <>
      <HeroBanner />
      <LogoBanner />
      <NewArrival />
    </>
  );
}

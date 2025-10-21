import { AnnouncementBar } from "../assets/components/AnnouncementBar";
import { Footer } from "../assets/components/Footer";
import { Header } from "../assets/components/Header";

export function LandingPageLayout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

import { AnnouncementBar } from "../assets/components/AnnouncementBar";
import { Footer } from "../assets/components/footer";
import { Header } from "../assets/components/header";

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

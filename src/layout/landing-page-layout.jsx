import { AnnouncementBar } from "../assets/components/announcementBar";
import { Footer } from "../assets/components/footer";
import { Header } from "../assets/components/header";

export default function LandingPageLayout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

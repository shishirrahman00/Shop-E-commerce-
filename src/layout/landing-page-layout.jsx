import { AnnouncementBar } from "@/components/announcementBar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

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

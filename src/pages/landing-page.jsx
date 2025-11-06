import { LandingPageLayout } from "@/layout/landing-page-layout";
import { Outlet } from "react-router-dom";

export function LandingPage() {
  return (
    <>
      <LandingPageLayout>
        <Outlet />
      </LandingPageLayout>
    </>
  );
}

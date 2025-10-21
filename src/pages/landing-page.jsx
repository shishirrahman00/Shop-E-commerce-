import { Outlet } from "react-router-dom";
import { LandingPageLayout } from "../layout/landing-page-layout";

export function LandingPage() {
  return (
    <>
      <LandingPageLayout>
        <Outlet />
      </LandingPageLayout>
    </>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ProductLoader } from "./loader/product-loader";
import { LandingPage } from "./pages/landing-page";
import LandingPageIndex from "./pages/landing-page-index";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
          path: "",
          element: <LandingPageIndex />,
          index: true,
          loader: ProductLoader,
        },
        // {
        //   path: "/brands",
        //   element: ,
        //   index: true,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

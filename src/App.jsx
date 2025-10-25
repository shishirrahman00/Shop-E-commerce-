import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ProductLoader } from "./loader/product-loader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <LandingPage />,
      lazy: async () => {
        return {
          Component: await import("./pages/landing-page").then(
            (comp) => comp.LandingPage
          ),
        };
      },

      children: [
        {
          path: "",
          index: true,
          loader: ProductLoader,
          lazy: async () => {
            return {
              Component: await import("./pages/landing-page-index").then(
                (comp) => comp.LandingPageIndex
              ),
            };
          },
        },
        {
          path: "/shop",
          lazy: async () => {
            return {
              Component: await import(
                "./pages/category-page/category-page"
              ).then((comp) => comp.CategoryPage),
            };
          },
          index: true,
          loader: ProductLoader,
        },
        {
          path: "/productdetails/:id",
          lazy: async () => {
            return {
              Component: await import(
                "./pages/product-details/product-details"
              ).then((comp) => comp.ProductDetails),
            };
          },
          loader: ProductLoader,
          index: true,
        },
        {
          path: "/checkoutcart",
          lazy: async () => {
            return {
              Component: await import("./pages/cart/cart").then(
                (comp) => comp.CheckoutCart
              ),
            };
          },
          index: true,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

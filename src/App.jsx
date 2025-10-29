import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ProductContextPovider } from "./context/product-context";
import { ProductLoader, SingleProductLoader } from "./loader/product-loader";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      // errorElement: <ErrorPage />,
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
          loader: SingleProductLoader,
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
        {
          path: "*",
          lazy: async () => {
            return {
              Component: await import("./pages/error-page").then(
                (comp) => comp.ErrorPage
              ),
            };
          },
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <ProductContextPovider>
        <RouterProvider router={router} />
      </ProductContextPovider>
    </QueryClientProvider>
  );
}

export default App;

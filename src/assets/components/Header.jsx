import { Button } from "@/components/ui/button";

import { PRODUCT_DELETE, UPDATE_CART } from "@/actions/action";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductContext } from "@/context/product-context";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchProduct } from "./search-product";

export function Header() {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <div className="container py-6">
      <div className="flex items-center justify-center gap-x-10 ">
        <div>
          <Link to="/">
            <h1 className="text-[32px] ">SHOP.CO</h1>
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-x-6">
          <li>
            <Link
              to="/checkoutcart"
              className="text-base hover:text-opacity-[40%] inline-flex items-center justify-center gap-x-1"
            >
              Shop
              <img src="/icons/Frame.svg" alt="drop icon" />
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base hover:text-opacity-[40%]">
              On Sale
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-base hover:text-opacity-[40%]">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/" className=" text-base hover:text-opacity-[40%]">
              Brands
            </Link>
          </li>
        </ul>
        <SearchProduct />

        <div className="flex items-center justify-center gap-x-[14px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className={"cursor-pointer"}
              >
                <span className="relative">
                  <img
                    src="/icons/cart.svg"
                    alt="cart icon"
                    className="cursor-pointer"
                  />
                  <span className="w-8 h-8 bg-black text-white rounded-full inline-flex items-center justify-center absolute -top-[20px] left-[7px]">
                    {state.cart.reduce((acc, curr) => {
                      return curr.quantity + acc;
                    }, 0)}
                  </span>
                </span>
              </Button>
            </SheetTrigger>
            <button>
              <img src="/icons/login.svg" alt="profile icon" />
            </button>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
              </SheetHeader>

              {state.cart.length === 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <h4 className="text-2xl">Your cart is empty</h4>
                </div>
              ) : (
                <div className="grid flex-1 auto-rows-min gap-6 px-4 overflow-y-scroll overflow-x-hidden">
                  <div className="grid gap-3">
                    {state.cart.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className=" relative border-b  border-b-black/10 py-4"
                        >
                          <div className="flex items-center gap-x-3">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="max-w-[80px] max-h-[80px] h-full shrink-0  object-cover  bg-[#F0F0F0]  "
                            />
                            <div>
                              <h4 className="text-[18px] truncate mb-1 line-clamp-2 mr-4">
                                {product.title}
                              </h4>
                              <p className="text-[18px] mb-2">
                                {product.quantity} x ${product.price}
                              </p>
                              <div className="bg-black text-white  flex items-center max-w-[100px] rounded ">
                                <button
                                  onClick={() => {
                                    return dispatch({
                                      type: UPDATE_CART,
                                      payload: {
                                        product,
                                        operation: "MINUS",
                                        quantity: 1,
                                      },
                                    });
                                  }}
                                  className="rounded cursor-pointer w-8 h-8 flex flex-1 items-center justify-center bg-transparent hover:bg-amber-500/60 transition-colors duration-200 ease-in-out"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </button>
                                <span className="px-3">{product.quantity}</span>
                                <button
                                  onClick={() => {
                                    return dispatch({
                                      type: UPDATE_CART,
                                      payload: {
                                        product,
                                        operation: "PLUS",
                                        quantity: 1,
                                      },
                                    });
                                  }}
                                  className=" rounded cursor-pointer w-8 h-8 flex  flex-1 items-center justify-center bg-transparent hover:bg-amber-500/60 transition-colors duration-200 ease-in-out"
                                >
                                  <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              return dispatch({
                                type: PRODUCT_DELETE,
                                payload: {
                                  product,
                                },
                              });
                            }}
                            className="absolute top-5 right-0 cursor-pointer w-6 h-6 bg-black text-white inline-flex items-center justify-center rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-x size-4"
                              ariaHidden="true"
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <SheetFooter>
                <div className="flex justify-between items-center">
                  <h2>Subtotal : </h2>
                  <p>
                    ${" "}
                    {state.cart
                      .reduce((acc, curr) => {
                        return curr.quantity * curr.price + acc;
                      }, 0)
                      .toFixed(3)}
                  </p>
                </div>
                <SheetClose asChild>
                  <Button
                    className={"cursor-pointer"}
                    onClick={() => {
                      navigate("/checkoutcart");
                    }}
                    type="submit"
                  >
                    View Cart
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

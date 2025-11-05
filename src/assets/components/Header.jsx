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
import { Hamburger } from "../../../public/icons/hamburger";
import { SearchProduct } from "./search-product";

export function Header() {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <div className="container py-6 px-4 md:px-5 xl:px-0">
      <div className="flex items-center xl:justify-center justify-between xl:gap-x-10 lg:gap-x-8 ">
        <div className="flex items-center justify-center gap-x-4">
          <Hamburger className="text-4xl xl:hidden inline-flex items-center justify-center mt-[7px]" />
          <div>
            <Link to="/">
              <h1 className="text-[32px] ">SHOP.CO</h1>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center justify-center gap-x-6 xl:flex">
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

        <div className="flex items-center justify-center md:gap-x-[14px] gap-x-2">
          <Sheet>
            <button className="text-black xl:hidden block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"></path>
              </svg>
            </button>
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

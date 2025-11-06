import { PRODUCT_DELETE, UPDATE_CART } from "@/actions/action";
import { ProductContext } from "@/context/product-context";
import { useContext } from "react";

export function CheckoutCart() {
  const { state, dispatch } = useContext(ProductContext);
  const subTotal = state.cart
    .reduce((acc, curr) => {
      return curr.quantity * curr.price + acc;
    }, 0)
    .toFixed(2);
  const deliveryFee = 15;
  const discount = (20 / 100).toFixed(2);
  return (
    <div className="container px-5 xl:px-0">
      <div>
        <h2>BREADCRUMB</h2>
      </div>
      <div>
        <h1 className="text-[40px] uppercase mb-6">Your cart</h1>
      </div>
      <div className="grid grid-cols-12 gap-x-5 gap-y-6 pb-20">
        <div className="lg:col-start-1 lg:col-end-8 col-start-1 col-end-12">
          <div className="border border-black/10 rounded-[20px] w-full md:h-full min-h-[280px] max-h-[400px] overflow-y-auto ">
            {state.cart.length === 0 ? (
              <div className="flex items-center justify-center w-full md:h-full min-h-[280px] ">
                <h3 className="text-3xl">Your cart is empty</h3>
              </div>
            ) : (
              <div className="  overflow-y-auto overflow-x-hidden divide-y divide-black/10">
                {state.cart.map((product) => {
                  return (
                    <div key={product.id} className=" overflow-hidden ">
                      <div className="flex items-center gap-x-4 py-5 md:px-6 px-[14px]">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="md:max-w-[100px] md:max-h-[100px] max-w-[80px] max-h-[80px] bg-[#F0F0F0]"
                        />
                        <div className="flex-1 overflow-hidden ">
                          <div className="flex justify-between  ">
                            <h4 className="mr-2 truncate overflow-hidden">
                              {product.title}
                            </h4>
                            <button
                              className="cursor-pointer shrink-0"
                              onClick={() => {
                                return dispatch({
                                  type: PRODUCT_DELETE,
                                  payload: {
                                    product,
                                  },
                                });
                              }}
                            >
                              <img src="/icons/trash.svg" alt="trash icon" />
                            </button>
                          </div>
                          <div>
                            <p className="text-sm text-black">
                              Category :{" "}
                              <span className="capitalize text-black/60">
                                {product.category}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-black">
                              Brand :{" "}
                              <span className="capitalize text-black/60">
                                {product.brand}
                              </span>
                            </p>
                          </div>
                          <div className="flex justify-between mt-3">
                            <h2>$ {product.price}</h2>
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
                                className="rounded cursor-pointer md:w-8 w-6 md:h-8 h-6 flex flex-1 items-center justify-center bg-transparent hover:bg-amber-500/60 transition-colors duration-200 ease-in-out"
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
                              <input
                                type="number"
                                value={product.quantity}
                                className="md:w-12 w-8 px-1 text-center bg-transparent text-white outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                              />

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
                                className=" rounded cursor-pointer md:w-8 w-6 md:h-8 h-6  flex  flex-1 items-center justify-center bg-transparent hover:bg-amber-500/60 transition-colors duration-200 ease-in-out"
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
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-end-13 col-start-1 col-end-12">
          <div className="border border-black/10 rounded-[20px] py-5 px-6">
            <div className="flex flex-col gap-y-6">
              <h2>Order Summary</h2>
              <div className="font-Satoshi-regular text-[20px] flex flex-col gap-y-5 border-b border-b-black-10 pb-5">
                <h4 className="flex items-center justify-between flex-1 text-black/60">
                  Subtotal
                  <span className="text-black">$ {subTotal}</span>
                </h4>
                <h4 className="flex items-center justify-between flex-1 text-black/60">
                  Discount (-20%)
                  <span className="text-[#FF3333]">-${discount}</span>
                </h4>
                <h4 className="flex items-center justify-between flex-1 text-black/60">
                  Delivery Fee
                  <span className="text-black">${deliveryFee}</span>
                </h4>
              </div>
              <div>
                {state.cart.length === 0 ? (
                  <h4 className="flex items-center justify-between flex-1 text-black/60 text-[20px]">
                    Total
                    <span className="text-black">$ 0.00</span>
                  </h4>
                ) : (
                  <h4 className="flex items-center justify-between flex-1 text-black/60 text-[20px]">
                    Total
                    <span className="text-black">
                      $ {(subTotal + deliveryFee - discount).toFixed(2)}
                    </span>
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

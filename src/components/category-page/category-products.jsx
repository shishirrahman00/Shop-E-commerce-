import { ADD_TO_CART } from "@/actions/action";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductContext } from "@/context/product-context";
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

export function CategoryProducts() {
  const productData = useLoaderData();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProductContext);
  return (
    <>
      <div className="container">
        <div className="flex md:flex-row flex-col items-center justify-between mb-6 gap-y-4">
          <h1>Here will be product category name</h1>
          <div className="flex gap-x-4 ">
            <div className="xl:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="bg-black text-white">
                    <h4 className="flex items-center justify-center gap-x-2">
                      Filter
                      <span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.75 7.75V13.5C8.75 13.6989 8.67098 13.8897 8.53033 14.0303C8.38968 14.171 8.19891 14.25 8 14.25C7.80109 14.25 7.61032 14.171 7.46967 14.0303C7.32902 13.8897 7.25 13.6989 7.25 13.5V7.75C7.25 7.55109 7.32902 7.36032 7.46967 7.21967C7.61032 7.07902 7.80109 7 8 7C8.19891 7 8.38968 7.07902 8.53033 7.21967C8.67098 7.36032 8.75 7.55109 8.75 7.75ZM12.5 12C12.3011 12 12.1103 12.079 11.9697 12.2197C11.829 12.3603 11.75 12.5511 11.75 12.75V13.5C11.75 13.6989 11.829 13.8897 11.9697 14.0303C12.1103 14.171 12.3011 14.25 12.5 14.25C12.6989 14.25 12.8897 14.171 13.0303 14.0303C13.171 13.8897 13.25 13.6989 13.25 13.5V12.75C13.25 12.5511 13.171 12.3603 13.0303 12.2197C12.8897 12.079 12.6989 12 12.5 12ZM14 9.5H13.25V2.5C13.25 2.30109 13.171 2.11032 13.0303 1.96967C12.8897 1.82902 12.6989 1.75 12.5 1.75C12.3011 1.75 12.1103 1.82902 11.9697 1.96967C11.829 2.11032 11.75 2.30109 11.75 2.5V9.5H11C10.8011 9.5 10.6103 9.57902 10.4697 9.71967C10.329 9.86032 10.25 10.0511 10.25 10.25C10.25 10.4489 10.329 10.6397 10.4697 10.7803C10.6103 10.921 10.8011 11 11 11H14C14.1989 11 14.3897 10.921 14.5303 10.7803C14.671 10.6397 14.75 10.4489 14.75 10.25C14.75 10.0511 14.671 9.86032 14.5303 9.71967C14.3897 9.57902 14.1989 9.5 14 9.5ZM3.5 10C3.30109 10 3.11032 10.079 2.96967 10.2197C2.82902 10.3603 2.75 10.5511 2.75 10.75V13.5C2.75 13.6989 2.82902 13.8897 2.96967 14.0303C3.11032 14.171 3.30109 14.25 3.5 14.25C3.69891 14.25 3.88968 14.171 4.03033 14.0303C4.17098 13.8897 4.25 13.6989 4.25 13.5V10.75C4.25 10.5511 4.17098 10.3603 4.03033 10.2197C3.88968 10.079 3.69891 10 3.5 10ZM5 7.5H4.25V2.5C4.25 2.30109 4.17098 2.11032 4.03033 1.96967C3.88968 1.82902 3.69891 1.75 3.5 1.75C3.30109 1.75 3.11032 1.82902 2.96967 1.96967C2.82902 2.11032 2.75 2.30109 2.75 2.5V7.5H2C1.80109 7.5 1.61032 7.57902 1.46967 7.71967C1.32902 7.86032 1.25 8.05109 1.25 8.25C1.25 8.44891 1.32902 8.63968 1.46967 8.78033C1.61032 8.92098 1.80109 9 2 9H5C5.19891 9 5.38968 8.92098 5.53033 8.78033C5.67098 8.63968 5.75 8.44891 5.75 8.25C5.75 8.05109 5.67098 7.86032 5.53033 7.71967C5.38968 7.57902 5.19891 7.5 5 7.5ZM9.5 4.5H8.75V2.5C8.75 2.30109 8.67098 2.11032 8.53033 1.96967C8.38968 1.82902 8.19891 1.75 8 1.75C7.80109 1.75 7.61032 1.82902 7.46967 1.96967C7.32902 2.11032 7.25 2.30109 7.25 2.5V4.5H6.5C6.30109 4.5 6.11032 4.57902 5.96967 4.71967C5.82902 4.86032 5.75 5.05109 5.75 5.25C5.75 5.44891 5.82902 5.63968 5.96967 5.78033C6.11032 5.92098 6.30109 6 6.5 6H9.5C9.69891 6 9.88968 5.92098 10.0303 5.78033C10.171 5.63968 10.25 5.44891 10.25 5.25C10.25 5.05109 10.171 4.86032 10.0303 4.71967C9.88968 4.57902 9.69891 4.5 9.5 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </h4>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                  </SheetHeader>
                  <div className="grid flex-1 auto-rows-min gap-6 px-4 overflow-y-auto ">
                    <div className="rounded-[20px] px-6 py-5 ">
                      {/* Filter Title Start */}
                      {/* <div className="flex items-center justify-between border-b border-b-black/10 pb-6">
                        <h3 className="font-Satoshi-bold text-[20px] leading-[1]">
                          Category
                        </h3>
                        <span>
                          <img src="/icons/filter-icon.svg" alt="filter-icon" />
                        </span>
                      </div> */}
                      {/* Filter Title END */}
                      {/* Products type Start */}
                      <div className="py-6 border-y border-y-black/10">
                        <ul className="flex flex-col gap-y-5 ">
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Beauty
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Fragrances
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Furniture
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Groceries
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Products type END */}
                      {/* Price Range Start */}
                      <div className="py-6 border-b border-b-black/10">
                        <div className="flex items-center justify-between  ">
                          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">
                            Price
                          </h3>
                          <button>
                            <img
                              src="/icons/up-angle.svg"
                              alt="up-angle arrow"
                            />
                          </button>
                        </div>
                      </div>
                      {/* Price Range End */}
                      {/* Color selection Start */}
                      <div className="py-6 border-b border-b-black/10">
                        <div className="flex items-center justify-between  ">
                          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">
                            Colors
                          </h3>
                          <button>
                            <img
                              src="/icons/up-angle.svg"
                              alt="up-angle arrow"
                            />
                          </button>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-[6px] gap-y-4 pt-5">
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#00C12B]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#06CAF5]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F50606]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F57906]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F5DD06]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#000000]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#063AF5]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#7D06F5]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#F506A4]"></span>
                          <span className="inline-flex items-center justify-center w-9 h-9 border border-black/20 rounded-full bg-[#FFFFFF]"></span>
                        </div>
                      </div>
                      {/* Color selection End */}
                      {/* Size selection Start */}
                      <div className="py-6 border-b border-b-black/10">
                        <div className="flex items-center justify-between  ">
                          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">
                            Size
                          </h3>
                          <button>
                            <img
                              src="/icons/up-angle.svg"
                              alt="up-angle arrow"
                            />
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-x-[6px] gap-y-2 pt-5">
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            XX-Small
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            X-Small
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            Small
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            Medium
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            Large
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            X-Large
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            XX-Large
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            3X-Large
                          </button>
                          <button className="inline-flex items-center justify-center font-Satoshi-medium text-sm leading-[1] text-black/60 bg-[#F0F0F0] border border-transparent px-5 py-[10px] rounded-[20px] hover:bg-black hover:text-white hover:border-black  transition-all duration-300 cursor-pointer">
                            4X-Large
                          </button>
                        </div>
                      </div>
                      {/* Size selection End */}
                      {/* Dress Style Start */}
                      <div className="py-6">
                        <div className="flex items-center justify-between  ">
                          <h3 className="font-Satoshi-bold text-[20px] leading-[1]">
                            Dress Style
                          </h3>
                          <button>
                            <img
                              src="/icons/up-angle.svg"
                              alt="up-angle arrow"
                            />
                          </button>
                        </div>

                        <ul className="flex flex-col gap-y-5 pt-5 ">
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Casual
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Formal
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Party
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link className="flex items-center justify-between font-Satoshi-regular text-black/60">
                              Gym
                              <img
                                src="/icons/right-angle.svg"
                                alt="right-arrow icon"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Dress Style End */}

                      <button className="bg-black text-white font-Satoshi-medium text-sm leading-[1] w-full py-[14px] border border-black rounded-[62px] hover:bg-black/60 hover:border-transparent transition-all duration-300 cursor-pointer">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By:" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="allProducts">All Products</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="lowToHigh">Low to High</SelectItem>
                  <SelectItem value="highToLow">High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-x-5 gap-y-9">
          {productData.products.map((item) => {
            return (
              <div key={item.id} className="group cursor-pointer">
                <div className=" relative overflow-hidden">
                  <img
                    onClick={() => {
                      navigate(`/productdetails/${item.id}`);
                    }}
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 bg-[#F0EEED] rounded-[20px] mb-4"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4  transition-transform  translate-y-full group-hover:translate-y-0 duration-500">
                    <button
                      onClick={() => {
                        return dispatch({
                          type: ADD_TO_CART,
                          payload: {
                            ...item,
                            quantity: 1,
                          },
                        });
                      }}
                      className="w-full py-3 bg-black text-base text-white border border-white/10 rounded-[62px] inline-flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="font-Satoshi-bold text-[20px] leading-[1] text-black mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-Satoshi-regular text-sm text-black mb-2">
                    Rating: {item.rating}/
                    <span className="text-black/60">5</span>
                  </p>
                  <p className="font-Satoshi-bold text-[20px] leading-[1] ">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "./../../hooks/useDebounce";

export function SearchProduct() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showBox, setShowBox] = useState(false);
  const debouncedQuery = useDebounce(searchQuery, 500);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${debouncedQuery}&limit=10`
      ).then((res) => res.json());
      return response;
      // console.log(response);
    },
    enabled: !!debouncedQuery,
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowBox(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative flex-1 ">
      <div className="relative xl:block hidden  ">
        <span className="  absolute top-1/2 -translate-y-1/2 left-4">
          <img src="/icons/search.svg" alt="search icon" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onFocus={() => setShowBox(true)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            // setShowBox(true);
          }}
          placeholder="Search for products..."
          className="w-full text-[#000] placeholder:text-base placeholder:text-[#000000] placeholder:opacity-[40%] outline-none bg-[#F0F0F0] py-3 rounded-full pl-[52px] pr-10"
        />
      </div>
      <div
        className={`absolute rounded-[20px] right-0 z-10 w-[500px] h-[300px] bg-[#fff8f8e5] text-black overflow-y-scroll overflow-x-hidden flex flex-col gap-y-3 transition-all duration-300 ease-in-out transform
    ${
      showBox
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-2 invisible"
    }
  `}
      >
        {isPending && (
          <div className="bg-white w-full h-full inline-flex items-center justify-center text-gray-500">
            Searching For Products...
          </div>
        )}
        {isError && (
          <div className="bg-[#fff8f8e5] w-full h-full inline-flex items-center justify-center text-gray-500">
            Error: {error.message}
          </div>
        )}
        {data && data.products.length === 0 && (
          <div className="bg-[#fff8f8e5] w-full h-full inline-flex items-center justify-center text-gray-500">
            No products found for "{debouncedQuery}"
          </div>
        )}
        {data?.products.map((product) => {
          return (
            <div
              key={product.id}
              onClick={() => {
                setShowBox(false);
                setSearchQuery("");
                navigate(`/productdetails/${product.id}`);
              }}
            >
              <div className="flex items-center border-b border-b-black/10 py-3 cursor-pointer">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[120px] h-[80px] object-cover"
                />
                <h2>{product.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

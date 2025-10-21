export function Button({ children, type }) {
  let baseStyle =
    "inline-flex items-center justify-center rounded-[62px] cursor-pointer font-Satoshi-medium text-base  py-4 ";
  let style = "";
  if (type === "shopNow") {
    style =
      " bg-black px-18 text-sm text-white hover:bg-black hover:opacity-70 ";
  }
  if (type === "viewAll") {
    style =
      "px-18 bg-white text-black border-[#000]/10 hover:text-white hover:bg-black transition-colors ";
  }

  return <button className={`${baseStyle} ${style}`}>{children}</button>;
}

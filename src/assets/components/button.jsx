export function Button({ children, type }) {
  let baseStyle =
    "inline-flex items-center justify-center rounded-full cursor-pointer font-Satoshi-medium text-base ";
  let style = "";
  if (type === "shopNow") {
    style =
      " bg-black px-18 py-4 text-sm text-white hover:bg-black hover:opacity-70 ";
  }
  if (type === "viewAll") {
    style = "";
  }

  return <button className={`${baseStyle} ${style}`}>{children}</button>;
}

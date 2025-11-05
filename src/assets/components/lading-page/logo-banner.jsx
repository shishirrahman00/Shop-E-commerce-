export function LogoBanner() {
  return (
    <div className="bg-[#000] py-[42px]">
      <div className="container">
        <div className="flex items-center justify-center gap-x-5 gap-y-6 md:gap-x-7  lg:gap-x-10 xl:gap-x-5 xl:justify-between flex-wrap">
          <img
            src="/images/versace-logo.png"
            alt="versace logo"
            className="h-6 w-28 md:h-10 md:w-48"
          />
          <img
            src="/images/zara-logo.png"
            alt="zara logo"
            className="h-6 w-28 md:h-10 md:w-48"
          />
          <img
            src="/images/gucci-logo.png"
            alt="gucci logo"
            className="h-6 w-28 md:h-10 md:w-48"
          />
          <img
            src="/images/prada-logo.png"
            alt="prada logo"
            className="h-6 w-28 md:h-10 md:w-48"
          />
          <img
            src="/images/calvin-klein-logo.png"
            alt="calvin klein logo"
            className="h-6 w-28 md:h-10 md:w-48"
          />
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Envelop } from "../../../public/icons/envelop.jsx";
import { Facebook } from "../../../public/icons/facebook.jsx";
import { Github } from "../../../public/icons/github.jsx";
import { Instagram } from "../../../public/icons/instagram.jsx";
import { Twitter } from "../../../public/icons/twitter.jsx";
export function Footer() {
  return (
    <footer>
      <div className="container relative z-[1] mb-[-92px] px-5 xl:px-0">
        <div className="grid grid-cols-12 items-center rounded-[20px] bg-[#000] md:px-16 px-6 py-9 gap-y-6">
          <div className="xl:col-start-1 xl:col-end-8 lg:col-start-1 lg:col-end-8 col-start-1 col-end-13">
            <h2 className="font-Integral-bold md:text-[40px] md:leading-[45px] text-[32px] leading-[35px] text-white">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="xl:col-start-9 xl:col-end-13 lg:col-start-8 lg:col-end-13 col-start-1 col-end-13">
            <form>
              <div className="relative">
                <Envelop
                  className={"absolute top-1/2 -translate-y-1/2 left-4"}
                />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-white w-full text-black rounded-full outline-none placeholder:text-black/60 py-3 pl-12 font-Satoshi-regular"
                />
              </div>
              <div className="mt-[14px]">
                <button className="block bg-white py-3 w-full cursor-pointer rounded-full border border-black/20 text-center font-Satoshi-medium  text-base transition-all duration-300 ease-in-out hover:border-white hover:bg-black hover:text-white ">
                  Subscribe to Newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F0F0] pt-[160px] px-5 xl:px-0">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-10 mb-12">
            <div className="lg:col-start-1 lg:col-end-5 md:col-start-1 md:col-end-7 col-start-1 col-end-13 ">
              <h1 className="mb-6 text-3xl leading-[1]">SHOP.CO</h1>

              <p className="mb-6 text-sm leading-[22px] text-black/60 md:max-w-[250px] w-full">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <ul className="flex items-center gap-x-3">
                <li>
                  <Link
                    to="/"
                    className="h-7 w-7 bg-white text-black border-[#000]/20 inline-flex items-center justify-center rounded-full hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out "
                  >
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="h-7 w-7 bg-white text-black border-[#000]/20 inline-flex items-center justify-center rounded-full hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out "
                  >
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="h-7 w-7 bg-white text-black border-[#000]/20 inline-flex items-center justify-center rounded-full hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out "
                  >
                    <Instagram />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="h-7 w-7 bg-white text-black border-[#000]/20 inline-flex items-center justify-center rounded-full hover:text-white hover:bg-black hover:border-black transition-colors duration-300 ease-in-out "
                  >
                    <Github />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-start-5 lg:col-end-7 md:col-start-7 md:col-end-13 col-start-1 col-end-13 ">
              <h3 className="uppercase text-base font-Satoshi-medium leading-[18px] tracking-[3px] mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-y-4">
                <li className="text-base leading-[19px] text-black/60">
                  About
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Features
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Works
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Career
                </li>
              </ul>
            </div>
            <div className="lg:col-start-7 lg:col-end-9 md:col-start-1 md:col-end-7 col-start-1 col-end-13 ">
              <h3 className="uppercase text-base font-Satoshi-medium leading-[18px] tracking-[3px] mb-6">
                Help
              </h3>
              <ul className="flex flex-col gap-y-4">
                <li className="text-base leading-[19px] text-black/60">
                  Customer Support
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Delivery Details
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Terms & Conditions
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Terms & Conditions
                </li>
              </ul>
            </div>
            <div className="lg:col-start-9 lg:col-end-11 md:col-start-7 md:col-end-13 col-start-1 col-end-13 ">
              <h3 className="uppercase text-base font-Satoshi-medium leading-[18px] tracking-[3px] mb-6">
                Faq
              </h3>
              <ul className="flex flex-col gap-y-4">
                <li className="text-base leading-[19px] text-black/60">
                  Account
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Manage Directives
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Orders
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Payments
                </li>
              </ul>
            </div>
            <div className="lg:col-start-11 lg:col-end-13 md:col-start-1 md:col-end-7 col-start-1 col-end-13 ">
              <h3 className="uppercase text-base font-Satoshi-medium leading-[18px] tracking-[3px] mb-6">
                Resources
              </h3>
              <ul className="flex flex-col gap-y-4">
                <li className="text-base leading-[19px] text-black/60">
                  Free eBooks
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Development Tutorial
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  How to - Blog
                </li>
                <li className="text-base leading-[19px] text-black/60">
                  Youtube Playlist
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-6 items-center justify-between border-t border-[#000]/10 py-5">
            <div>
              <p className="text-sm text-black/60">
                Shop.co {new Date().getFullYear()}. All Rights Reserved
              </p>
            </div>
            <div className="flex items-center">
              <img src="/icons/visa.svg" alt="Visa Icon" />
              <img src="/icons/mastercard.svg" alt="MasterCard Icon" />
              <img src="/icons/paypal.svg" alt="Paypal Icon" />
              <img src="/icons/applepay.svg" alt="ApplePay Icon" />
              <img src="/icons/googlepay.svg" alt="GooglePay Icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

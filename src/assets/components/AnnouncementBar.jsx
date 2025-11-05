import { Link } from "react-router-dom";

export function AnnouncementBar() {
  return (
    <div className="bg-black py-[10px]">
      <div className="container">
        <div className="text-center relative">
          <p className="text-white text-sm ">
            Sign up and get 20% off to your first order.
            <Link to="/" className="border-b font-bold ml-1">
              Sign Up Now
            </Link>
          </p>
          <button className="text-white text-[20px] absolute top-1/2 -translate-y-1/2 right-0 hidden lg:block">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

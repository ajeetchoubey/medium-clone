import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  }, []);
  return (
    <header
      className={`border-b border-black sticky top-0 z-50 ${
        isActive ? "bg-white" : "bg-banner"
      } transition-all duration-500`}
    >
      <div className=" size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="font-bold text-4xl bg-black text-white px-3 py-1 rounded-sm">
            <span className=" font-extralight">Read</span>
            It
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-base sm:flex items-center gap-5 font-semibold">
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className=" relative">
            <button className="hidden text-base font-semibold sm:flex items-center gap-5">
              Sign In
            </button>
          </div>
          <button
            className={`${
              isActive ? "bg-green-600" : "bg-black"
            } text-white rounded-full px-4 py-3 text-base font-semibold transition-all duration-500`}
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;

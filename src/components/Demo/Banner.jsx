import React from "react";

const Banner = () => {
  return (
    <div className=" bg-banner border-b border-black">
      <div className=" size py-[5rem] flex flex-col items-start gap-[1rem]">
        <h1 className=" font-title text-[3rem] sm:text-[4rem] md:text-[6rem]">
          Discover More.
        </h1>
        <p className=" w-full md:w-[30rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7">Simplicity Unveiled: Your Gateway to Endless Discovery.</p>
        <button className=" btn bg-black1 rounded-full text-white mt-14">Start Reading</button>
      </div>
    </div>
  );
};

export default Banner;

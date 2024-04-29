import React from "react";
import { discover, discoveryActions } from "../../data";

const Discover = () => {
  return (
    <div className="sticky top-[6rem]">
      <div className=" border-b border-gray-400 pb-7">
        <h2 className=" font-semibold">Discover more of what matters to you</h2>
        <div className=" mt-4 flex items-center gap-3 flex-wrap">
          {discover.map((item, index) => (
            <button
              key={index}
              className=" bg-gray-200 py-1 px-3 text-sm rounded-full hover:bg-gray-300"
            >
              {item}
            </button>
          ))}
        </div>
        <button className=" text-green-500 text-sm pt-3 hover:text-black1">
          See more topics
        </button>
      </div>
      <div className=" flex items-center flex-wrap gap-3 leading-3 pt-8">
        {discoveryActions.map((action, index) => (
          <button className=" text-md text-black1" key={index}>
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Discover;

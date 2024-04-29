import React from "react";

const Loading = () => {
  return (
    <div className=" fixed inset-0 grid place-items-center bg-white z-30">
      <img
        src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
        alt="loading"
      />
    </div>
  );
};

export default Loading;

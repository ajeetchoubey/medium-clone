import React from "react";

const Input = ({ type, title }) => {
  return (
    <div className=" flex flex-col items-center">
      <label className=" justify-start font-semibold text-lg px-2 py-2">{title}</label>
      <input type={type} name={title} className=" border-b border-black px-1 py- w-full text-center outline-none" />
    </div>
  );
};

export default Input;

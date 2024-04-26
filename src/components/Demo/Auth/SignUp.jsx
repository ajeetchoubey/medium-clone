import React from "react";
import Input from "../../../utils/Input";
import { MdKeyboardArrowLeft } from "react-icons/md";

const SignUp = ({setSignReq}) => {
  return (
    <div className="size mt-[6rem] text-center">
      <h2 className=" text-3xl font-semibold">Sign Up with Email</h2>
      <p className=" w-full sm:w-[25rem] mx-auto py-[3rem]">
        Enter the Email address associated with your account, and we'll send a
        magic link to your inbox
      </p>
      <form className=" flex flex-col gap-3">
        <Input type={"text"} title="Username" />
        <Input type={"email"} title="Email" />
        <Input type="password" title="Password" />
        <Input type="password" title="Confirm Password" />
        <button className=" px-8 py-2 text-lg rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">Sign Up</button>
      </form>
      <button onClick={() => setSignReq("")} className=" flex mt-8 text-base text-green-800 hover:text-green-700 items-center justify-center mx-auto">
        <MdKeyboardArrowLeft />
        All Sign Up options
      </button>
    </div>
  );
};

export default SignUp;

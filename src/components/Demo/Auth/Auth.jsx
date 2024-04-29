import React, { useState } from "react";
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = ({ modal, setModal }) => {
  const [createUser, setCreateUser] = useState(true);
  const [signReq, setSignReq] = useState("");
  const navigate = useNavigate();

  const googleAuth = async () => {
    try {
      const createUser = await signInWithPopup(auth, provider);
      const newUser = createUser.user;

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: newUser.uid,
          username: newUser.displayName,
          email: newUser.email,
          userImg: newUser.photoURL,
          bio: "",
        });
        navigate("/");
        toast.success("User have been Signed In");
        setModal(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Modal modal={modal} setModal={setModal}>
      <section
        className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadow-lg ${
          modal ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-500`}
      >
        <button
          className=" absolute top-8 right-8 text-3xl hover:opacity-60"
          onClick={() => setModal(false)}
        >
          <LiaTimesSolid />
        </button>
        <div className=" flex flex-col justify-center items-center gap-[3rem]">
          {signReq === "" ? (
            <>
              <h2 className=" text-2xl pt-[5rem] font-semibold">
                {createUser ? "Join ReadIt" : "Welcome back"}
              </h2>
              <div className=" flex flex-col gap-2 w-fit mx-auto">
                <Button
                  click={googleAuth}
                  icon={<FcGoogle className=" text-2xl" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} with Google`}
                />
                <Button
                  icon={<MdFacebook className=" text-2xl text-blue-700" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} with Facebook`}
                />
                <Button
                  click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                  icon={<AiOutlineMail className=" text-2xl" />}
                  text={`${createUser ? "Sign Up" : "Sign In"} with Email`}
                />
              </div>
              <p>
                {createUser
                  ? "Already have an Account?"
                  : "Don't have an Account?"}
                <button
                  className=" text-green-700 hover:text-green-800 font-semibold ml-1"
                  onClick={() => setCreateUser(!createUser)}
                >
                  {createUser ? "Sign In" : "Create one"}
                </button>
              </p>
            </>
          ) : signReq === "sign-in" ? (
            <SignIn setSignReq={setSignReq} />
          ) : signReq === "sign-up" ? (
            <SignUp setSignReq={setSignReq} />
          ) : null}
          <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
            Click "Sign In" to agree to ReadIt's Terms of Service and
            acknowledge that ReadIt's Privacy Policy applies to you.
          </p>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;

const Button = ({ icon, text, click }) => {
  return (
    <button
      onClick={click}
      className=" flex items-center gap-2 justify-center sm:w-[20rem] border border-black px-3 py-2 rounded-full"
    >
      {icon} {text}
    </button>
  );
};

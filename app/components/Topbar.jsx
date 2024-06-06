"use client";
import React from "react";
import { signInWithGooglePopup } from "../lib/firebaseConfig";
import Cookies from "js-cookie";

const Topbar = () => {
  const handleGoogleLogin = async () => {
    const response = await signInWithGooglePopup();
    Cookies.set("user",response._tokenResponse.idToken)
  };

  return (
    <div className="py-4 flex justify-end gap-5 items-center">
     {Cookies.get("user") ?
     <>
     <button className="text-center bg-[#3A3A3A] p-4 font-medium text-base h-min">Jobs</button>
     <button className="text-center bg-[#144D00] p-4 font-medium text-base h-min">Upload new CVs <br/> <span className="font-normal">10 tokens</span></button>
     <button className="bg-white text-base rounded-full px-3 text-black py-3 h-min">Account icon</button>
     </>
     :<button
        className="bg-white text-base rounded-full px-3 text-black py-3"
        onClick={handleGoogleLogin}
      >
        Google Sign
      </button>}
    </div>
  );
};

export default Topbar;

"use client"
import React, { useState } from "react";
import DescriptionPopup from "../components/DescriptionPopup";
import Link from "next/link";

const page = () => {

  const [descriptionPopup, setDescriptionPopup] = useState(false)
  return (
    <>
    <div className="flex justify-between items-center mt-24">
      <h1 className="text-5xl font-bold">
        Evaluate a CV of a candidate with AI
      </h1>
      <div className="flex flex-col gap-10 max-w-[250px]">
        <button className="text-center bg-[#3A3A3A] p-4 font-semibold text-2xl" onClick={()=>setDescriptionPopup(true)}>Paste your job description</button>
        <Link href="/upload-cv"><button className="text-center bg-[#3A3A3A] p-4 font-semibold text-2xl w-full">Upload some CV</button></Link>
        <button className="text-center bg-[#144D00] p-4 font-semibold text-2xl">Analyze <br/>(10 tokens) </button>
      </div>
    </div>
    {descriptionPopup && <DescriptionPopup onClose={()=>setDescriptionPopup(false)}/>}
    </>
  );
};

export default page;

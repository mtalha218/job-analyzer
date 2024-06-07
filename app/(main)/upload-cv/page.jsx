"use client";
import DescriptionPopup from "@/app/components/DescriptionPopup";
import Image from "next/image";
import React, { useRef, useState } from "react";

const UploadCV = () => {
  const [descriptionPopup, setDescriptionPopup] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (files) => {
    setFiles((prev) => [...prev, ...files]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl text-bold text-center ">Add New Candidates</h2>
      <p className="text-center text-lg mt-7">
        Choose a role for CV evaluation from current jobs:
      </p>
      <p
        className="text-center text-lg mt-7 cursor-pointer"
        onClick={() => setDescriptionPopup(true)}
      >
        ... or paste a new Job Description
      </p>
      {console.log(files)}
      <div className="flex justify-center mt-10">
        <div>
          {files.map((file, index) => (
            <div className="flex gap-4 items-center mt-4" key={index}>
              <Image src="/doc.svg" width={30} height={42} alt="doc" />
              <p className="text-xl">{file.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-28">
        <input
          type="file"
          ref={fileInputRef}
          accept=".pdf, .doc, .docx"
          style={{ display: "none" }}
          onChange={(e) => handleFileUpload(e.target.files)}
          multiple
        />
        <button onClick={handleButtonClick} className="mx-auto text-3xl underline">
          Upload new CVs
        </button>
      </div>
      <div className="w-full flex justify-center mt-7">
      <button className="text-center bg-[#144D00] px-14 py-4 font-semibold text-2xl">Analyze <br/>(10 tokens) </button>
      </div>

      {descriptionPopup && (
        <DescriptionPopup onClose={() => setDescriptionPopup(false)} />
      )}
    </div>
  );
};

export default UploadCV;

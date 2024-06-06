import React, { useRef, useEffect } from "react";

const DescriptionPopup = (props) => {
  const popupRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.onClose();
      }
    }; 

    // 

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [props.onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="fixed inset-0 bg-black opacity-70"></div>

      <div
        ref={popupRef}
        className="p-10 rounded-[9px] shadow-md min-w-[450px] w-[40%] z-50 bg-white"
      >
        <textarea
        className="w-full border border-[#a6a6a6] p-4 text-black"
        rows={10}
          type="text"
          placeholder="Insert your job description here. You don't need to worry about the layout or structure. 
Just include the essence of the job, tasks, deliverables, requirements, qualifications, skills, etc."
        />
      <div className="flex justify-center gap-5 mt-5">
        <button className="bg-[#000300] px-7 py-4 text-2xl" onClick={props.onClose}>Confirm</button>
        <button className="bg-[#4E4E4E] px-7 py-4 text-2xl" onClick={props.onClose}>Cancel</button>
      </div>
      </div>
    </div>
  );
};

export default DescriptionPopup;

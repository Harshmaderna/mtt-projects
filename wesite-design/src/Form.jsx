import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex mt-20 ml-20 gap-20">
        <img src="./call.png" alt="" className="w-[500px]" />
        <div className="p-10  bg-[#ededf0] mt-20 ml-20  w-[500px] rounded-md ">
          <h1 className="font-bold text-gray-700 text-3xl">Drop Us a Line</h1>
          <p
            className="mt-3
         text-gray-500"
          >
            Feel free to contact us anytime
          </p>
          <div className="flex gap-20">
            <input
              type="text"
              placeholder="Your Name*"
              className="outline-none mt-4"
            />
            <input
              type="text"
              placeholder="Email*"
              className="outline-none mt-4"
            />
          </div>
          <div className="flex gap-14">
            <div className="border-1 border-gray-400 w-[200px] mt-2"></div>
            <div className="border-1 border-gray-400 w-[200px] mt-2"></div>
          </div>
          <div className="flex gap-20">
            <input
              type="text"
              placeholder="Phone*"
              className="outline-none mt-6"
            />
            <input
              type="text"
              placeholder="Website*"
              className="outline-none mt-6"
            />
          </div>
          <div className="flex gap-14">
            <div className="border-1 border-gray-400 w-[200px] mt-2"></div>
            <div className="border-1 border-gray-400 w-[200px] mt-2"></div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Message"
              className="outline-none mt-6"
            />
          </div>
          <div className="border-1 border-gray-400 w-[400px] mt-10"></div>
          <button className="mt-10 bg-gradient-to-l from-blue-900 to-blue-500 p-4 rounded-md cursor-pointer text-white font-bold text-sm">
            SEND MESSAGE
          </button>
        </div>
      </div>
      <div className="border border-gray-400 mt-25 "></div>
    </>
  );
};

export default Form;

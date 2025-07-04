import React from "react";
import { FaCheck } from "react-icons/fa";
const KeyFeature = () => {
  return (
    <div>
      <div>
        <div className="px-20 ml-10">
          <h2 className="text-gray-600 font-bold text-2xl mt-10">
            KEY FEATURES & SERVICES
          </h2>
          <div className="flex mt-6 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">
              Developed in PHP (Core PHP, WordPress, Magneto, Woo Commerce,
              Codeigniter, Laravel), Asp.Net, Java, React Js
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">Customization</p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">
              Database My SQL, SQL and Mongo db
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">Website Development</p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">Web Application</p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">e-commerce Website</p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">Maintains of Website</p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-[19px]">Server Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;

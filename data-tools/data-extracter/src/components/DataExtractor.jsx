import React from "react";
import { FaCheck } from "react-icons/fa";
const DataExtractor = () => {
  return (
    <div>
      <div className="px-30">
        <h2 className="text-gray-600 font-bold text-2xl mt-10">
          OUR DATA EXTRACTOR PRODUCTS AND SERVICES
        </h2>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">Google Map</p>
        </div>
        <div className="flex mt-4 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">Trade India</p>
        </div>
        <div className="flex mt-4 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">Just Dial</p>
        </div>
        <div className="flex mt-4 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">India Mart</p>
        </div>
      </div>
    </div>
  );
};

export default DataExtractor;

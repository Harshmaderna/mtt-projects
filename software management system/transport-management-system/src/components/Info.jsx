import React from "react";

const Info = () => {
  return (
    <div>
      <div className="flex gap-12">
        <img src="/men.png" alt="" className="w-[600px] ml-20 py-4" />
        <div>
          <h1 className="mt-20 text-3xl text-gray-700 font-bold w-120">
            TRANSPORT MANAGEMENT SYSTEM
          </h1>
          <p className="mt-5 font-semibold text-gray-500 text-xl w-130">
            Transport management software in India (TMS) is a specialized
            software solution that is designed to help transportation companies
            manage and optimize their operations. A TMS provides a centralized
            platform for businesses to manage their fleet, track shipments, plan
            routes, and streamline logistics operations.
          </p>
          <button className="mt-10 bg-gray-500 p-2 m-2 w-35 rounded-md text-white font-semibold text-sm cursor-pointer">Request Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Info;

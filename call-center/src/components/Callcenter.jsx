import React from "react";
import { FaCheck } from "react-icons/fa";
const Callcenter = () => {
  return (
    <div>
      <div className="px-20">
        <h2 className="text-gray-600 font-bold text-2xl mt-10">
          OUR CALL CENTRE(BPO/KPO) SERVICES
        </h2>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Registration & Appointment Management, Reminders
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Service Appointment and Remainders
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
           Collection Reminder Services
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Customer Support Service
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Help Desk Services
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Sales Call Centre
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Inbound Call Centre
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Outbound Call Centre
          </p>
        </div>
        <div className="flex mt-2 gap-5">
          <FaCheck className="text-white text-2xl  bg-green-600 p-1  rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Chat Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default Callcenter;

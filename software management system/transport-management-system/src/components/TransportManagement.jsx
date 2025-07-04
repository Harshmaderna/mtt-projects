import React from 'react'
import { FaCheck } from "react-icons/fa";
const TransportManagement = () => {
  return (
   <div className='p-2'>
      <div className="px-20 ">
        <h2 className="text-gray-600 font-bold text-2xl mt-10">
          SOME OF THE KEY FEATURES OF TRANSPORT MANAGEMENT SOFTWARE MAY INCLUDE:
        </h2>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
           Order management: This feature allows businesses to manage their orders, shipments, and deliveries from a single platform.
          </p>
        </div>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
           Routing and scheduling: TMS can help businesses optimize their routes and schedules to minimize costs and improve efficiency.
          </p>
        </div>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
           Carrier management: TMS can help businesses manage their relationships with carriers, including negotiating rates and tracking performance.
          </p>
        </div>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Inventory management: TMS solutions include inventory management features that allow businesses to track inventory levels and manage stock across multiple locations.
          </p>
        </div>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Help Desk Services
          </p>
        </div>
        <div className="flex mt-6 gap-5">
          <FaCheck className="text-white text-2xl bg-green-600 p-1 rounded-full" />
          <p className="text-gray-500 font-semibold ">
            Analytics and reporting: TMS can provide businesses with detailed analytics and reports on their transportation operations, helping them identify areas for improvement and make data-driven decisions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TransportManagement

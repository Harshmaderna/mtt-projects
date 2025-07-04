import React from "react";
import { FaCheck } from "react-icons/fa";
const Report = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center mt-15 font-bold text-gray-800">
          REPORTS
        </h1>
        <p className="mt-6 ml-30 text-xl text-gray-500 ">
          Reports refer to the data that is generated and presented in a
          structured format to provide users with valuable insights and
          actionable information
        </p>
        <p className="mt-6 ml-30 text-xl text-gray-500 font-bold">
          Reports refer to the data that is generated and presented in a
          structured format to provide users with valuable insights and
          actionable information
        </p>
        <div className="flex mt-6 gap-5 ml-30">
          <div>
            <FaCheck className="text-white text-4xl bg-green-600 p-1 rounded-full" />
          </div>
          <div>
            <p className="text-gray-500 font-semibold ">
              Customer reports: customer reports refer to the data that is
              generated to customers in a structured format to provide them with
              valuable insights and information about their ticket booking and
              shipments.
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-5 ml-30">
          <div>
            <FaCheck className="text-white text-4xl bg-green-600 p-1 rounded-full" />
          </div>
          <div>
            <p className="text-gray-500 font-semibold ">
              Transaction reports: transaction reports refer to the data that is
              presented in a structured format to provide users with valuable
              information about financial transactions related to transportation
              services like revenue tracking, expense tracking, profit and loss
              analyzing etc.
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-5 ml-30">
          <div>
            <FaCheck className="text-white text-4xl bg-green-600 p-1 rounded-full" />
          </div>
          <div>
            <p className="text-gray-500 font-semibold ">
              Performance report: It generate report on over all performance
              like staffing performance, vehicle performance, customer
              satisfaction etc.
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-5 ml-30">
          <div>
            <FaCheck className="text-white text-4xl bg-green-600 p-1 rounded-full" />
          </div>
          <div>
            <p className="text-gray-500 font-semibold ">
              Buses evening report: The ability to track and analyze driver
              performance during the evening shift, delays, and other
              disruptions including metrics such as on-time performance, fuel
              efficiency, and safety.
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-5 ml-30">
          <div>
            <FaCheck className="text-white text-4xl bg-green-600 p-1 rounded-full" />
          </div>
          <div>
            <p className="text-gray-500 font-semibold ">
              Buses morning report: It’s same as evening reporting – The ability
              to track and analyze driver performance during the evening shift,
              delays, and other disruptions including metrics such as on-time
              performance, fuel efficiency, and safety.
            </p>
          </div>
        </div>
        <div className="flex mt-6 gap-5 ml-30">
          <div>
            <FaCheck className="text-white text-4xl bg-green-600 p-1 rounded-full" />
          </div>
          <div>
            <p className="text-gray-500 font-semibold ">
              Parcel report: Keep information about tracing details, parcel
              volumes, parcel cost, delivery charges, delivery report etc.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl mt-10 text-gray-800 font-bold">RECEIPT</h1>
        <p className="text-xl font-semibold text-gray-500 ml-20 mt-5">
          The ability to automatically generate receipts for various types of
          transactions such as ticket sales, parcel deliveries, and other
          transportation services.
        </p>
      </div>
      <div className="">
        <h1 className="text-3xl text-center mt-10 text-gray-800 font-bold">PROFIT AND LOSS</h1>
        <p className="text-xl font-semibold text-gray-500 ml-25 w-290 mt-5">
         Transport companies need to manage their finances effectively to ensure profitability and sustainability. TMS can help transport companies manage their profit and loss by providing various features that enable them to track their expenses, revenue, and profits accurately.
        </p>
        <p className="text-xl font-semibold text-gray-500 ml-25 w-290 mt-5">• Collection– Track all sources of revenue for the transport company, including ticket sales, parcel deliveries, and other services. This feature can help companies identify areas where they can increase revenue and maximize profits.</p>
        <p className="text-xl font-semibold text-gray-500 ml-25 w-290 mt-5">
            • Expenses – TMS can track all expenses incurred by the transport company, including fuel costs, vehicle maintenance costs, employee salaries, and other expenses. This feature can help companies identify areas where they can reduce expenses and optimize their operations to minimize costs.
        </p>
      </div>
      <div>
        <h1 className="text-3xl text-center mt-10 text-gray-800 font-bold">BACK-UP AND RESTORATION</h1>
        <p className="text-xl font-semibold text-gray-500 ml-25 w-290 mt-5">In the context of transport management software, back-up refers to creating a copy of the data and configurations that are essential to the smooth operation of the software. Restoration, on the other hand, refers to the process of recovering the data and configurations in case of a system failure or loss of data.</p>
      </div>
    </div>
  );
};

export default Report;

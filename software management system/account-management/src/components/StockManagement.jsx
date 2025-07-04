import React from "react";
import { FaCheck } from "react-icons/fa";
const StockManagement = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-gray-700 p-4 mt-10 ml-14">
          STOCK MANAGEMENT
        </h1>
        <p className="ml-18 text-xl w-[1100px] font-semibold text-gray-500">
          Stock management, also known as inventory management, is the process
          of managing the flow of goods and materials in and out of a business.
          It involves the tracking and control of inventory levels, ensuring
          that enough stock is available to meet customer demand while
          minimizing the costs associated with overstocking or stock outs.
        </p>
        <div className="flex items-center justify-center mt-5">
          <img src="/stock.png" alt="" className="w-[600px] " />
        </div>
        <p className="text-gray-600 text-2xl font-bold mt-5 ml-20">
          Effective stock management includes several key components, including:
        </p>
      </div>
      <div>
        <div className="px-20">
          <div className="flex mt-8 gap-5">
            <div>
              <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            </div>
            <p className="text-gray-500 font-semibold text-xl">
              <span className="font-extrabold">
                Accurate tracking of inventory levels:
              </span>{" "}
              This involves regularly updating stock levels and maintaining
              accurate records of inventory movements, including incoming stock,
              outgoing stock, and any stock adjustments.
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            <p className="text-gray-500 font-semibold text-xl">
              <span className="font-extrabold">Inventory forecasting:</span>{" "}
              This involves predicting future demand for goods and materials to
              ensure that stock levels are maintained at optimal levels.
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <div>
              <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            </div>
            <p className="text-gray-500 font-semibold text-xl">
              <span className="font-extrabold">Supply chain management:</span>{" "}
              This involves managing the flow of goods and materials from
              suppliers to the business, ensuring that suppliers are reliable
              and can deliver the required quantities of goods and materials on
              time.
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <div>
              <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            </div>
            <p className="text-gray-500 font-semibold text-xl">
              <span className="font-extrabold">Warehouse management:</span> This
              involves organizing and managing the physical space where
              inventory is stored, ensuring that goods are easily accessible,
              and that the warehouse is clean and organized.
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <div>
              <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            </div>
            <p className="text-gray-500 font-semibold text-xl">
              <span className="font-extrabold">Stock rotation:</span> This
              involves ensuring that goods with expiry dates or shelf-life are
              rotated to ensure that the oldest stock is used first, minimizing
              the risk of waste or spoilage.
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <div>
              <FaCheck className="text-white text-3xl bg-green-600 p-1 rounded-full" />
            </div>
            <p className="text-gray-500 font-semibold text-xl">
              <span className="font-extrabold">Inventory control:</span> This
              involves implementing measures to prevent loss, theft, or damage
              of inventory, such as security measures, tracking systems, and
              regular inventory audits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockManagement;

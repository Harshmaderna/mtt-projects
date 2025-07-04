import React from "react";

const Database = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl mt-15 text-gray-700 font-bold">
          DATABASE BACKUP & RESTORE
        </h1>
        <p className="text-gray-500 font-semibold text-[19px] text-center mt-10 ml-10">
          Database backup and restore is a critical process in ensuring data
          integrity and availability. Here is a general overview of how it
          works:
        </p>
      </div>
      <div className="flex gap-20 ml-40">
        <div className=" flex flex-col items-center justify-center mt-20">
          <img src="/backup.png" alt="" className=" w-[129px]" />
          <p className="font-bold text-gray-700 text-xl mt-3">BACKUP</p>
          <p className="text-gray-500 font-semibold w-[500px] mt-4">
            A database backup is a copy of the database that is made at a
            specific point in time. It is important to perform regular backups
            to protect against data loss due to hardware failures, human errors,
            or security breaches. There are several types of backups that can be
            performed, including full backups, differential backups, and
            incremental backups. A full backup copies the entire database, while
            a differential backup only copies the data that has changed since
            the last full backup. An incremental backup only copies the data
            that has changed since the last backup of any type.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <img src="/backup.png" alt="" className=" w-[129px]" />
          <p className="font-bold text-gray-700 text-xl mt-3">STORAGE</p>
          <p className="text-gray-500 font-semibold w-[500px] mt-4">
            A database backup is a copy of the database that is made at a
            specific point in time. It is important to perform regular backups
            to protect against data loss due to hardware failures, human errors,
            or security breaches. There are several types of backups that can be
            performed, including full backups, differential backups, and
            incremental backups. A full backup copies the entire database, while
            a differential backup only copies the data that has changed since
            the last full backup. An incremental backup only copies the data
            that has changed since the last backup of any type.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-15 text-3xl text-gray-700 font-bold">
          PARTIAL PAYMENT
        </h1>
        <p className="text-gray-500 font-semibold mt-10 text-center ml-30 mr-30 text-[19px]">
          Partial payment refers to a situation where a customer pays only a
          portion of the total amount owed for a product or service. For
          example, if a customer owes $100 for a product, but only pays $50,
          this would be considered a partial payment.
        </p>
        <p className="text-gray-500 font-semibold mt-10 text-center ml-30 mr-30 text-[19px]">
          There can be various reasons why a customer may choose to make a partial payment. For instance, they may not have enough funds to pay the full amount at once, or they may wish to make multiple payments over time.
        </p>
        <p className="text-gray-500 font-semibold mt-10 text-center ml-30 mr-30 text-[19px]">
          Partial payments are often used in installment plans or payment agreements, where the customer agrees to pay the full amount over a specified period of time. The partial payments may be made weekly, monthly or at other intervals.
        </p>
      </div>
    </div>
  );
};

export default Database;

import React from "react";

const Management = () => {
  return (
    <>
      <div>
        <div className="mt-10">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            BUS MANAGEMENT
          </h1>
          <p className="text-center mt-5 text-xl font-semibold text-gray-500">
            Bus management refers to the process of managing the scheduling,
            routing, and maintenance of buses in a transportation network
          </p>
          <div className="flex gap-20 items-center justify-center">
            <div>
              <img src="/busentry.png" alt="" className="  mt-10" />
              <p className="text-gray-500 font-semibold ml-12  text-[20px]">
                Buses entry
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                Our Sms Marketing Plan Which Unlimited Validity.Fill bus details
                to keep record of every buses. The particular bus is on road or
                off road
              </p>
            </div>
            <div>
              <img src="/busreporting.png" alt="" className=" mt-10" />
              <p className="text-gray-500 font-semibold ml-12 text-[20px]">
                Bus wise reporting
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                It keep information about bus performance in terms of fuel
                consumption, maintenance costs, passenger loads, and other
                metrics
              </p>
            </div>
            <div>
              <img src="/planrouting.png" alt="" />
              <p className="text-gray-500 font-semibold ml-12 text-[20px]">
                Plan Routing
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                {" "}
                It helps in time consumption, fuel consumption
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            TICKET MANAGEMENT
          </h1>
          <p className="ml-12 text-center w-318 mt-5 text-xl font-semibold text-gray-500">
            Ticket management refers to the process of managing the issuance and
            tracking of tickets for transportation services. This can include
            tickets for buses of transportation.
          </p>
          <div className="flex gap-20 items-center justify-center">
            <div>
              <img src="/busentry.png" alt="" className="  mt-10" />
              <p className="text-gray-500 font-semibold ml-12  text-[20px]">
                Booking
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                Bus wise ticket booking, keep records of tickets for particular
                bus and number of passengers
              </p>
            </div>
            <div>
              <img src="/busreporting.png" alt="" className=" mt-10" />
              <p className="text-gray-500 font-semibold ml-12 text-[20px]">
                Bus wise entries
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                Track timing of bus for booking ticket
              </p>
            </div>
            <div className="mt-12">
              <img src="/planrouting.png" alt="" className="" />
              <p className="text-gray-500 font-semibold ml-19 text-[20px]">
                Reports
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                {" "}
                Number of seats available in particular bus Collections- It keep
                record of total collection, bus wise collection
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            PARCEL MANAGEMENT
          </h1>
          <p className=" ml-10 text-center w-318 mt-5 text-xl font-semibold text-gray-500">
            Parcel management refers to the process of managing the delivery of individual parcels or packages. It involves tracking the movement of each parcel from the time it is picked up by the carrier to the time it is delivered to the recipient.
          </p>
          <div className="flex gap-20 items-center justify-center">
            <div>
              <img src="/busentry.png" alt="" className="  mt-10" />
              <p className="text-gray-500 font-semibold ml-12  text-[20px]">
               Parcel Booking
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
               keep records of parcel booking like name, number, address etc
              </p>
            </div>
            <div>
              <img src="/busreporting.png" alt="" className=" mt-10" />
              <p className="text-gray-500 font-semibold ml-12 text-[20px]">
                Parcel recieving
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                Witch staff received parcel, name and number
              </p>
            </div>
            <div className="mt-12">
              <img src="/planrouting.png" alt="" className="" />
              <p className="text-gray-500 font-semibold ml-13 text-[20px]">
                Parcel tracking
              </p>
              <p className="text-gray-500 font-semibold  w-78 mt-2">
                {" "}
                Knowing the status of parcel, real time tracking, manually update, delivery confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;

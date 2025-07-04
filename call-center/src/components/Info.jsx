import React from "react";

const Info = () => {
  return (
    <div>
      <div className="flex p-20 gap-10">
        <img src="./public/ourCapacity.png" alt="" className="w-[550px] h-80" />
        <div>
          <h1 className="text-gray-700 text-3xl font-bold">
            EXPERIENCE UNMATCHED CUSTOMER SERVICE WITH OUR STELLAR CALL CENTER
            TEAM
          </h1>
          <p className="mt-5 text-gray-500 font-sans text-[18px]">
            Any organization’s primary responsibility is to meet all client
            needs and offer the greatest support possible by rendering our best
            services. We offer you professionally focused services that enable
            us to maintain the focus of your customers. One of the top{" "}
            <span className="font-extrabold">
              call center company, Media Tech Temple
            </span>{" "}
            constantly provides its products and services to its clients while
            preserving positive relationships with them. We also serve as your
            company’s provider of outsourcing call centre services.
          </p>
          <p className="mt-5 text-gray-500 font-sans text-[18px]">
            At Media Tech Temple, we believe in providing the best call center
            company that not only meets but exceeds our client’s expectations.
            We understand that customer satisfaction is crucial to any
            business’s success, and that’s why we make it our top priority to
            ensure that all our client’s needs are met.
          </p>
        </div>
      </div>
      <div className="flex px-20 py-5 gap-10">
        <div>
          <h1 className="text-gray-700 text-3xl font-bold">
            AN UNDERSTANDING OF INDIA'S CALL CENTER SERVICES
          </h1>
          <p className="mt-5 text-gray-500 font-sans text-[18px]">
            Customers’ incoming calls are answered by an inbound call centre.
            Since calls to inbound centres frequently come from existing
            customers with problems or inquiries, support employees usually keep
            an observation on them. We offer inbound call centre services that
            are skilled, dependable, and affordable to successfully handle
            incoming calls.
          </p>
          <p className="mt-5 text-gray-500 font-sans text-[18px]">
            We are a top provider of inbound call centre services, and we have a
            wealth of expertise working with clients across a range of
            industries, including travel & hospitality, real estate, airlines,
            E-commerce, retail, banking, and more. By outsourcing your incoming
            call centre needs to us, you can take advantage of strategic inbound
            call services that will keep you one step ahead of the competition
            and help you achieve your business goals.
          </p>
          <p className="mt-5 text-gray-500 font-sans text-[18px]">
            Existing clients can also be contacted for service renewal, contact
            list updates, debt collection, market research, or proactive
            customer service.
          </p>
        </div>
        <img src="./public/ourCapacity.png" alt="" className="w-[550px] h-80"/>
      </div>
    </div>
  );
};

export default Info;

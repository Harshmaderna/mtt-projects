import React from "react";

const Info = () => {
  return (
    <div className="px-24 py-6 flex gap-10">
      <img src="./public/globe.png" alt="" className="w-[500px] h-[700px]" />
      <div className="px-10 py-13">
        <h1 className="text-3xl text-gray-800 font-bold">
          NEED DATA EXTRACTOR FOR YOUR BUSINESS
        </h1>
        <p className="font-semibold text-gray-500 text-xl mt-6">
          Data extraction is the process of taking into account and moving
          through data in order to retrieve pertinent information from data
          sources in a certain design. It is finished with additional data
          processing, which includes adding metadata and integrating other data.
        </p>
        <p className="text-xl font-semibold text-gray-500 mt-6">
          <span className="font-extrabold">
            Data extractor services providers
          </span>{" "}
          offer data exports and extraction services to enterprises. Data
          extraction, commonly referred to as web scraping, is the process of
          using web scraping tools to collect data from a website or any other
          source, such as emails, online forms, and other sources. Web scraping
          technologies mimic the process of data scraping by gathering specific
          data points from the source. Companies can use data extraction
          services to outsource their extraction requirements to professionals
          and technicians that accurately filter through web pages, databases,
          documents, photos, and files. These data extraction service providers
          will handle the full extraction procedure for customers after
          receiving the user’s needs and their data sources.
        </p>
      </div>
    </div>
  );
};

export default Info;

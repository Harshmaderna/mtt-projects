import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="flex gap-12">
        <div>
          <img src="./public/mtt-logo.png" alt="" className="w-68 p-4 ml-20" />
          <p className="ml-24 text-gray-500 font-semibold w-[500px]">
            MediaTechTemple, technology driving company which focusing on
            traditional as well as Innovation solutions.
          </p>
          <div className="px-24 py-4 flex gap-5">
            <FaFacebookF className="cursor-pointer text-blue-600 text-xl" />
            <FaGooglePlusG className="cursor-pointer text-red-500 text-xl" />
            <FaInstagram className="cursor-pointer text-pink-500 text-xl" />
            <FaLinkedin className="cursor-pointer text-blue-900 text-xl" />
          </div>
          <div className="px-24 py-4 flex gap-4">
            <img src="./public/phone.png" alt="" className="w-8" />
            <div>
              <p className="font-semibold text-gray-500">+91-7220867768</p>
              <p className="font-semibold text-gray-500">
                info@mediatechtemple.com
              </p>
            </div>
          </div>
          <div className="px-22 py-4 flex gap-4">
            <img src="/location.png" alt="" className="w-10" />
            <p className="font-semibold text-gray-500 w-88">
              57, SWARAN JAYANTI NAGAR, BHARATPUR, Rajasthan 321001
            </p>
          </div>
        </div>
        <div className="px-4 py-8">
          <h1 className="text-2xl text-gray-800 font-extrabold">
            Our Services
          </h1>
          <ul className="px-1 py-4">
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Home
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Product & Services
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Our Ventures
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Clients
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Blogs
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Carrier
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Photo Gallery
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="px-12 py-8">
          <h1 className="text-2xl text-gray-800 font-extrabold">
            Our Services
          </h1>
          <ul className="px-1 py-4">
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Terms and Conditions
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Cookies Policy
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Website Acceptable Use Policy
            </li>
            <li className="text-gray-500 font-semibold mt-2 cursor-pointer">
              Downloads
            </li>
          </ul>
        </div>
      </div>
      <div className="border-1 border-gray-500 w-full mt-10"></div>
      <div className="px-24 py-6">
        <p className="text-gray-500">
          © 2023 — Media Tech Temple. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

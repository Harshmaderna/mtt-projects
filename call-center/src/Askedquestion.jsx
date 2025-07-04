import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
const Askedquestion = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false)
  const [question4, setQuestion4] = useState(false)
  const [question5, setQuestion5] = useState(false)
  const toggleText1 = () => setQuestion1(!question1);
  const toggleText2 = () => setQuestion2(!question2);
  const toggleText3 = () => setQuestion3(!question3)
  const toggleText4 = () => setQuestion4(!question4)
  const toggleText5 = () => setQuestion5(!question5)

  return (
    <div>
      <div className="mt-4">
        <h1 className="text-center font-bold text-gray-800 text-3xl">
          Frequently Asked Questions
        </h1>
        <div  onClick={toggleText1}
          className="flex mt-5  items-start px-30 py-5 gap-2 cursor-pointer"
        >
          {" "}
          {question1 ? (
            <FaMinus className="text-gray-700 text-2xl mt-1" />
          ) : (
            <FaPlus className="text-gray-700 text-2xl mt-1" />
          )}{" "}
          <div className="gap-2">
            <p className="font-bold text-gray-500 text-xl">
              What services does your call center offer?
            </p>
          </div>
          {question1 && (
            <p className="text-gray-500 ml-10 font-semibold">
              We provide inbound and outbound customer support, technical
              assistance, lead generation, telemarketing, and appointment
              scheduling, tailored to your business needs.
            </p>
          )}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText2} className="flex px-30 py-5 gap-2 cursor-pointer">
          {question2 ? (
            <FaMinus className=" text-gray-700 text-2xl mt-1" />
          ) : (
            <FaPlus className=" text-gray-700 text-2xl mt-1" />
          )}
          <p className="font-bold text-gray-500 text-xl">
            How do you ensure quality customer service?
          </p>
          {question2 && (
            <p className="font-semibold mt-5 text-gray-500">
              Through continuous agent training, call monitoring, and quality
              assurance processes, we ensure consistent and effective customer
              interactions.
            </p>
          )}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText3} className="flex px-30 py-5 gap-2 cursor-pointer">
         {question3 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> :<FaPlus className=" text-gray-700 text-2xl mt-1" />} 
          <p className="font-bold text-gray-500 text-xl">
            Which industries benefit from your call center services?
          </p>
          {question3 && <p className="mt-5 font-semibold text-gray-500">We serve industries such as e-commerce, healthcare, finance, telecom, and education, providing customized solutions for businesses of all sizes.</p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText4} className="flex px-30 py-5 gap-2 cursor-pointer">
          {question4 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> : <FaPlus className=" text-gray-700 text-2xl mt-1" />}
          <p className="font-bold text-gray-500 text-xl">
            Can your services scale with my business?
          </p>
          {question4 && <p className=" text-gray-500 font-semibold">Yes, our services are flexible and scalable, allowing us to handle growth, seasonal demand, and expanding markets without compromising quality.</p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText5} className="flex px-30 py-5 gap-2 cursor-pointer">
         {question5 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> :<FaPlus className=" text-gray-700 text-2xl mt-1" />} 
          <p className="font-bold text-gray-500 text-xl">
            What are the costs of your call center services?
          </p>
          {question5 && <p className="font-semibold text-gray-500">We provide inbound and outbound customer support, technical assistance, lead generation, telemarketing, and appointment scheduling, tailored to your business needs.</p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
      </div>
    </div>
  );
};

export default Askedquestion;

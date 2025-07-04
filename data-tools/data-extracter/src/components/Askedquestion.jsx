import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
const Askedquestion = () => {
const [question1, setQuestion1] = useState(false)
const [question2, setQuestion2] = useState(false)
const [question3, setQuestion3] = useState(false)
const [question4, setQuestion4] = useState(false)
const [question5, setQuestion5] = useState(false)
const toggleText1 = () => setQuestion1(!question1)
const toggleText2 = () => setQuestion2(!question2)
const toggleText3 = () => setQuestion3(!question3)
const toggleText4 = () => setQuestion4(!question4)
const toggleText5 = () => setQuestion5(!question5)
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-center font-bold text-gray-700 text-3xl">
          Frequently Asked Questions
        </h1>
        <div onClick={toggleText1} className="flex px-30 py-5 gap-2 cursor-pointer">
          {question1 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> : <FaPlus className=" text-gray-700 text-2xl mt-1" />}
          <p className="font-bold text-gray-500 text-xl">
           What is sender id ?
          </p>
          {question1 && <p className="font-semibold text-gray-500 mt-2 ml-4 text-xl">It is seen as the name in the header of the SMS. For example MTT-ABCDEF, MTT-123456</p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText2} className="flex px-30 py-5 gap-2 cursor-pointer">
          {question2 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/>:<FaPlus className=" text-gray-700 text-2xl mt-1" />}
          <p className="font-bold text-gray-500 text-xl">
            What is transactional SMS ?
          </p>
          {question2 && <p className="font-semibold text-gray-500 text-xl">
            Transactional SMS is used to send notification, alerts, updates and information. it also send on DND number.
          </p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText3} className="flex px-30 py-5 gap-2 cursor-pointer">
         {question3 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> : <FaPlus className=" text-gray-700 text-2xl mt-1" />} 
          <p className="font-bold text-gray-500 text-xl">
           Will I get a confirmation once my messages are delivered ?
          </p>
          {question3 &&  <p className="font-semibold text-gray-500 text-xl">
           Yes, you can get an update each and every SMS for their delivery status.
          </p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText4} className="flex px-30 py-5 gap-2 cursor-pointer">
          {question4 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> : <FaPlus className=" text-gray-700 text-2xl mt-1" />}
          <p className="font-bold text-gray-500 text-xl">
            How many SMS’s can I send in a day ?
          </p>
          {question4 && <p className="font-semibold text-gray-500 text-xl ml-8">There is no exact limit to send SMS.</p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
        <div onClick={toggleText5} className="flex px-30 py-5 gap-2 cursor-pointer">
         {question5 ? <FaMinus className=" text-gray-700 text-2xl mt-1"/> : <FaPlus className=" text-gray-700 text-2xl mt-1" />} 
          <p className="font-bold text-gray-500 text-xl">
            How many days can be taken in DLT registration ?
          </p>
          {question5 && <p className="font-semibold text-gray-500 text-xl ml-10">
            It is seen as the name in the header of the SMS.
          </p>}
        </div>
        <div className="border border-gray-600 w-[1150px] ml-22"></div>
      </div>
    </div>
  );
};

export default Askedquestion;

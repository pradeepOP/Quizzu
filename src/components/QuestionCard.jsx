"use client";
import Image from "next/image";
import { useState } from "react";

const QuestionCard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="pl-6 pt-7">
      <h1 className="text-[#0E0F0F] text-2xl font-bold">
        1. Which country flag is shown in the picture below?
      </h1>
      <Image
        src="/questionImage.png"
        width={224}
        height={129}
        alt="question image"
        className="w-[224px] h-[129px] object-contain rounded-xl mt-7"
      />
      {/* options */}
      <form className="mt-6">
        <div className="grid grid-cols-2 gap-y-7">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option1"
              value="Japan"
              checked={selectedOption === "Japan"}
              onChange={handleOptionChange}
              className="accent-[#063173] scale-150"
            />
            <label htmlFor="option1" className="text-[#0E0F0F] text-lg">
              Japan
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option2"
              value="India"
              checked={selectedOption === "India"}
              onChange={handleOptionChange}
              className="accent-[#063173] scale-150"
            />
            <label htmlFor="option2" className="text-[#0E0F0F] text-lg">
              India
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option3"
              value="Korea"
              checked={selectedOption === "Korea"}
              onChange={handleOptionChange}
              className="accent-[#063173] scale-150"
            />
            <label htmlFor="option3" className="text-[#0E0F0F] text-lg">
              Korea
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="option4"
              value="Nepal"
              checked={selectedOption === "Nepal"}
              onChange={handleOptionChange}
              className="accent-[#063173] scale-150"
            />
            <label htmlFor="option4" className="text-[#0E0F0F] text-lg">
              Nepal
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionCard;

"use client";
import Image from "next/image";
import ExamSetCard from "./ExamSetCard";
import ApiRequest from "@/utils/apiRequest";
import { useEffect, useState } from "react";
const ExamCategoryComoponent = ({ category }) => {
  console.log(category);
  return (
    <div>
      <h1 className="text-[#0E0F0F] font-bold italic text-5xl">
        {category.name}
      </h1>
      {/* sets */}
      <div className="grid grid-cols-3 gap-5 mt-16">
        {/* set card */}
        {category?.quizzes?.map((quiz, index) => {
          return <ExamSetCard key={index} quiz={quiz} />;
        })}
      </div>
    </div>
  );
};
export default ExamCategoryComoponent;

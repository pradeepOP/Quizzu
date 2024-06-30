"use client";
import Image from "next/image";
import ExamSetCard from "./ExamSetCard";
import ApiRequest from "@/utils/apiRequest";
import { useEffect, useState } from "react";
const ExamCategoryComoponent = ({ category }) => {
  return (
    <div>
      <h1 className="text-[#0E0F0F] font-bold italic text-3xl md:text-5xl">
        {category.name}
      </h1>
      {/* sets */}
      <div className="grid grid-cols-1 gap-5 mt-16 md:grid-cols-3">
        {/* set card */}
        {category?.quizzes?.map((quiz, index) => {
          return <ExamSetCard key={index} quiz={quiz} />;
        })}
      </div>
    </div>
  );
};
export default ExamCategoryComoponent;

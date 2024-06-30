import Image from "next/image";
import ExamSetCard from "./ExamSetCard";
const ExamCategoryComoponent = () => {
  return (
    <div>
      <h1 className="text-[#0E0F0F] font-bold italic text-5xl">EPS-Topik</h1>
      {/* sets */}
      <div className="grid grid-cols-3 gap-5 mt-16">
        {/* set card */}
        <ExamSetCard />
        <ExamSetCard />
        <ExamSetCard />
      </div>
    </div>
  );
};
export default ExamCategoryComoponent;

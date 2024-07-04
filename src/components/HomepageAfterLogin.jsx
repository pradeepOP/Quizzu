import Image from "next/image";
import React, { useEffect, useState } from "react";
import ExamCategoryComoponent from "./ExamCategoryComoponent";
import ApiRequest from "@/utils/apiRequest";

const HomepageAfterLogin = () => {
  const [quizSets, setQuizSets] = useState([]);

  const fetchQuizSets = async () => {
    try {
      const res = await ApiRequest.get("/category");

      setQuizSets(res?.data?.data?.categories);
    } catch (error) {
      console.error("Error fetching quiz sets:", error);
    }
  };

  useEffect(() => {
    fetchQuizSets();
  }, []);
  
  return (
    <div className="w-full px-5 mx-auto max-w-[1140px] md:px-0">
      {/* container */}
      <div className="mt-14">
        {/* topdiv */}
        <div className="pb-10 bg-white rounded-xl ">
          <h1 className="text-[#0E0F0F] text-center font-bold text-2xl italic md:text-5xl pt-5">
            Leaderboard
          </h1>
          {/* user score information for top 3 */}
          <div className="px-5 mt-10 space-y-4 md:px-14">
            {/* score card */}
            <div className="flex gap-6 md:gap-14">
              <Image
                src="/sawako.jpg"
                width={114}
                height={114}
                alt="profile imaage"
                className="object-cover rounded-full w-[57px] h-[57px] md:w-[114px] md:h-[114px]"
              />

              {/* fullname and score */}
              <div>
                <h2 className="text-[#063173] font-bold  md:text-3xl mb-1">
                  Pradeep Chhetri
                </h2>
                <Image
                  src="/sampleScore.png"
                  width={727}
                  height={35}
                  alt="score image"
                  className="rounded-xl"
                />
                <p className="text-end text-[#000000] font-bold">Socre:320</p>
              </div>
              <Image
                src="/batch.png"
                width={84}
                height={99}
                alt="batch"
                className="rounded-full w-[42px] h-[50px] md:w-[84px] md:h-[99px] object-cover"
              />
            </div>
            <div className="flex gap-6 md:gap-14">
              <Image
                src="/sawako.jpg"
                width={114}
                height={114}
                alt="profile imaage"
                className="object-cover rounded-full w-[57px] h-[57px] md:w-[114px] md:h-[114px]"
              />

              {/* fullname and score */}
              <div>
                <h2 className="text-[#063173] font-bold  md:text-3xl mb-1">
                  Pradeep Chhetri
                </h2>
                <Image
                  src="/sampleScore.png"
                  width={727}
                  height={35}
                  alt="score image"
                  className="rounded-xl"
                />
                <p className="text-end text-[#000000] font-bold">Socre:320</p>
              </div>
              <Image
                src="/batch.png"
                width={84}
                height={99}
                alt="batch"
                className="rounded-full w-[42px] h-[50px] md:w-[84px] md:h-[99px] object-cover"
              />
            </div>
            <div className="flex gap-6 md:gap-14">
              <Image
                src="/sawako.jpg"
                width={114}
                height={114}
                alt="profile imaage"
                className="object-cover rounded-full w-[57px] h-[57px] md:w-[114px] md:h-[114px]"
              />

              {/* fullname and score */}
              <div>
                <h2 className="text-[#063173] font-bold  md:text-3xl mb-1">
                  Pradeep Chhetri
                </h2>
                <Image
                  src="/sampleScore.png"
                  width={727}
                  height={35}
                  alt="score image"
                  className="rounded-xl"
                />
                <p className="text-end text-[#000000] font-bold">Socre:320</p>
              </div>
              <Image
                src="/batch.png"
                width={84}
                height={99}
                alt="batch"
                className="rounded-full w-[42px] h-[50px] md:w-[84px] md:h-[99px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* exam category and question div */}

        {/* exam category */}
        <div className="space-y-16 mt-14">
          {/* category card */}
          {quizSets.map((category) => (
            <ExamCategoryComoponent key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageAfterLogin;

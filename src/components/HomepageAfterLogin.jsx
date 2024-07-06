import Image from "next/image";
import React, { useEffect, useState } from "react";
import ExamCategoryComoponent from "./ExamCategoryComoponent";
import ApiRequest from "@/utils/apiRequest";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomepageAfterLogin = () => {
  const [quizSets, setQuizSets] = useState([]);
  const [topScore, setTopScore] = useState([]);
  console.log(topScore);

  const fetchQuizSets = async () => {
    try {
      const res = await ApiRequest.get("/category");
      setQuizSets(res?.data?.data?.categories);
    } catch (error) {
      console.error("Error fetching quiz sets:", error);
    }
  };

  const fetchTopScore = async () => {
    try {
      const res = await ApiRequest.get("/score/top/three");
      setTopScore(res?.data?.data?.topScores);
    } catch (error) {
      console.error("Error fetching top score:", error);
    }
  };

  useEffect(() => {
    fetchQuizSets();
    fetchTopScore();
  }, []);

  // Find the highest score
  const highestScore = topScore.length
    ? Math.max(...topScore.map((score) => score.totalScore))
    : 0;

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
            {topScore &&
              topScore.map((score, index) => (
                <div
                  key={score.user._id}
                  className="flex gap-6 md:gap-14 items-center"
                >
                  <Image
                    src={score.user.avatar}
                    width={114}
                    height={114}
                    alt="profile image"
                    className="object-cover rounded-full w-[57px] h-[57px] md:w-[114px] md:h-[114px]"
                  />

                  {/* fullname and score */}
                  <div className="flex-1">
                    <h2 className="text-[#063173] font-bold md:text-3xl mb-1">
                      {score.user.fullname}
                    </h2>
                    <div className="relative w-full h-6 bg-gray-200 rounded-xl">
                      <div
                        className="absolute top-0 left-0 h-full rounded-xl"
                        style={{
                          width: `${(score.totalScore / highestScore) * 100}%`,
                          backgroundColor: "rgba(255, 144, 144, 1)",
                        }}
                      />
                    </div>
                    <div className="flex gap-4 justify-end mt-1">
                      <p className="text-end text-[#000000] font-bold">
                        Full Marks: {score.totalQuestions}
                      </p>
                      <p className="text-end text-[#000000] font-bold">
                        Score: {score.totalScore}
                      </p>
                      <p className="text-end text-[#000000] font-bold">
                        Accuracy: {score.accuracy.toFixed(2)}%
                      </p>
                    </div>
                  </div>

                  {index === 0 && (
                    <Image
                      src="/1st.png"
                      width={84}
                      height={99}
                      alt="batch"
                      className="rounded-full w-[42px] h-[50px] md:w-[84px] md:h-[99px] object-cover"
                    />
                  )}
                  {index === 1 && (
                    <Image
                      src="/second.png"
                      width={84}
                      height={99}
                      alt="batch"
                      className="rounded-full w-[42px] h-[50px] md:w-[84px] md:h-[99px] object-cover"
                    />
                  )}
                  {index === 2 && (
                    <Image
                      src="/3rd.png"
                      width={84}
                      height={99}
                      alt="batch"
                      className="rounded-full w-[42px] h-[50px] md:w-[84px] md:h-[99px] object-cover"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* exam category */}
        <div className="space-y-16 mt-14">
          {quizSets.map((category) => (
            <ExamCategoryComoponent key={category._id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageAfterLogin;

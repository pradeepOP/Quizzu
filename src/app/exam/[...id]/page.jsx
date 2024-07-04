"use client";
import QuestionCard from "@/components/QuestionCard";
import Image from "next/image";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/userContext";
import ApiRequest from "@/utils/apiRequest";
import { toast } from "react-toastify";
import Timer from "@/components/Timer";
import PropagateLoader from "react-spinners/PropagateLoader";

const Exam = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [initialMinutes, setInitialMinutes] = useState(0);

  const fetchQuiz = async () => {
    try {
      setLoading(true);
      const res = await ApiRequest.get(`/quiz/${id}`);
      setQuiz(res?.data?.data?.quiz);
      setInitialMinutes(res?.data?.data?.quiz?.duration || 0);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(quiz);
  useEffect(() => {
    fetchQuiz();
  }, [id]);

  const handleOptionSelect = (questionId, option) => {
    const updatedQuestions = quiz.questions.map((question) =>
      question._id === questionId
        ? { ...question, selectedOption: option, attempted: true }
        : question
    );

    setQuiz({ ...quiz, questions: updatedQuestions });
    console.log(updatedQuestions);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz?.questions?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionButtonClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const calculateResult = () => {
    const correctAnswers = quiz.questions.filter(
      (question) => question.selectedOption === question.correct_option
    ).length;
    const wrongAnswers = quiz.questions.filter(
      (question) =>
        question.attempted &&
        question.selectedOption !== question.correct_option
    ).length;

    const notAnswered = quiz.questions.filter(
      (question) => !question.attempted
    ).length;

    return {
      correctAnswers,
      wrongAnswers,
      notAnswered,
    };
  };

  const handleSubmit = async (elapsedTime) => {
    const selectedOptions = quiz.questions.map((question) => ({
      questionId: question._id,
      selectedOption: question.selectedOption || "",
    }));

    const result = calculateResult();

    const reqBody = {
      user: user._id,
      quiz: id,
      selectedOptions,
      totalScore: result.correctAnswers,
      correctAnswers: result.correctAnswers,
      wrongAnswers: result.wrongAnswers,
      notAnswered: result.notAnswered,
      timeTaken: elapsedTime,
    };

    try {
      const response = await ApiRequest.post("/score", reqBody);

      const scoreId = response?.data?.data?.score?._id;
      router.push(`/exam/result/${scoreId}`);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const currentQuestion = quiz?.questions?.[currentQuestionIndex];

  return (
    <div className="w-full h-full md:h-[800px] max-w-6xl px-5 mx-auto my-10 md:px-0">
      {loading ? (
        <div className="flex items-center justify-center h-[50%]">
          <PropagateLoader color="#0eb1a6" loading={loading} size={20} />
        </div>
      ) : (
        <>
          <h1 className="mt-12 text-[#0E0F0F] text-3xl md:text-5xl font-bold">
            {quiz?.category?.name}
            <span className="text-[#C40031]"> {quiz.title}</span>
          </h1>
          {/* container */}
          <div className="bg-[#F7F7F7] md:h-[736px] mt-10 md:mt-20 border-2 border-[#BBD6FF] rounded-xl flex flex-col md:flex-row">
            {/* left div */}
            <div className="w-[265px] h-full md:border-r-2 border-[#BBD6FF] pt-6 mx-auto">
              <Timer
                initialMinutes={initialMinutes}
                onTimerEnd={handleSubmit}
                onTimeUpdate={setElapsedTime}
              />

              <p className="py-4 px-6 bg-[#E5EFFF] mt-14 text-[#0E0F0F] border-l-8 border-[#C40031]">
                Reading
              </p>

              <div className="w-4/5 mx-auto flex flex-col justify-between mt-6 h-[60%] ">
                {/* question numbers */}
                <div className="flex flex-wrap gap-3 overflow-y-auto">
                  {quiz?.questions?.map((question, index) => (
                    <button
                      key={index}
                      className={` w-8 h-8 rounded-xl
                    ${
                      question.attempted
                        ? "bg-[#C40031] border-2 border-[#C40031] text-white"
                        : "border-2 text-[#063173] border-[#063173]"
                    }`}
                      onClick={() => handleQuestionButtonClick(index)}>
                      {index + 1}
                    </button>
                  ))}
                </div>
                {/* legend */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1.5 rounded-xl bg-[#C40031] border-2 border-[#C40031] text-white">
                      A
                    </span>
                    <span className="text-[#0E0F0F] text-base font-medium">
                      Attempted
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                      B
                    </span>
                    <span className="text-[#0E0F0F] text-base font-medium">
                      Unattempted
                    </span>
                  </div>
                  {/* <div className="flex items-center gap-4">
                  <span className="px-3 py-1.5 rounded-xl bg-[#C6C2C2] border-2 text-[#063173] border-[#063173]">
                    C
                  </span>
                  <span className="text-[#0E0F0F] text-base font-medium">
                    Marked to review
                  </span>
                </div> */}
                </div>
              </div>
            </div>
            {/* right div */}
            <div className="md:flex-1">
              <h1 className="text-[#063173] font-bold text-center text-2xl mt-6 md:mt-0 py-7 border-b-2 border-[#BBD6FF]">
                Question {currentQuestionIndex + 1}
              </h1>
              {/* Question card */}
              {currentQuestion && (
                <QuestionCard
                  key={currentQuestionIndex}
                  question={currentQuestion}
                  onOptionSelect={handleOptionSelect}
                  questionIndex={currentQuestionIndex}
                />
              )}

              {/* previous and next button */}
              <div className="flex items-center gap-5 mt-16 pl-7">
                <button
                  className="flex items-center gap-2"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}>
                  <MdSkipPrevious size={20} />
                  <span className="text-[#0E0F0F] text-lg">Previous</span>
                </button>
                <button
                  className="flex items-center gap-2"
                  onClick={handleNextQuestion}
                  disabled={
                    currentQuestionIndex === quiz?.questions?.length - 1
                  }>
                  <span className="text-[#0E0F0F] text-lg">Next</span>
                  <MdSkipNext size={20} />
                </button>
              </div>

              <div className="flex justify-end mt-32 mb-4 mr-12">
                <button
                  type="submit"
                  className=" text-white bg-[#063173] py-3 px-6 rounded-xl"
                  onClick={() => handleSubmit(elapsedTime)}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Exam;

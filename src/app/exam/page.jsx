import QuestionCard from "@/components/QuestionCard";
import Image from "next/image";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

const Exam = () => {
  return (
    <div className="w-full h-[800px] max-w-6xl px-5 mx-auto my-10 md:px-0">
      <h1 className="mt-12 text-[#0E0F0F] text-5xl font-bold">
        EPS-Topik <span className="text-[#C40031]"> Set 1</span>
      </h1>
      {/* container */}
      <div className="bg-[#F7F7F7] h-[736px] mt-20 border-2 border-[#BBD6FF] rounded-xl flex flex-col md:flex-row">
        {/* left div */}
        <div className="w-[265px] h-full md:border-r-2 border-[#BBD6FF] pt-6 mx-auto">
          <Image
            src="/time.png"
            alt="time"
            width={161}
            height={161}
            className="object-cover mx-auto"
          />

          <p className="py-4 px-6 bg-[#E5EFFF] mt-16 text-[#0E0F0F] border-l-8 border-[#C40031]">
            Reading
          </p>

          <div className="w-4/5 mx-auto space-y-40 mt-6 h-[400px] overflow-y-auto">
            {/* question numbers */}
            <div className="flex flex-wrap gap-3">
              <button className="px-3 py-1.5 rounded-xl bg-[#C40031] border-2 border-[#C40031] text-white">
                1
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                2
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
              <button className="px-3 py-1.5 rounded-xl border-2 text-[#063173] border-[#063173]">
                3
              </button>
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
              <div className="flex items-center gap-4">
                <span className="px-3 py-1.5 rounded-xl bg-[#C6C2C2] border-2 text-[#063173] border-[#063173]">
                  C
                </span>
                <span className="text-[#0E0F0F] text-base font-medium">
                  Marked to review
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="md:flex-1">
          <h1 className="text-[#063173] font-bold text-center text-2xl mt-6 md:mt-0 py-7 border-b-2 border-[#BBD6FF]">
            Question 1
          </h1>
          <QuestionCard />

          {/* previous and next button */}
          <div className="flex items-center gap-5 mt-16 pl-7">
            <button className="flex items-center gap-2">
              <MdSkipPrevious size={20} />
              <span className="text-[#0E0F0F] text-lg">Previous</span>
            </button>
            <button className="flex items-center gap-2">
              <span className="text-[#0E0F0F] text-lg">Next</span>
              <MdSkipNext size={20} />
            </button>
          </div>

          <div className="flex justify-end mt-32 mr-12">
            <button className=" text-white bg-[#063173] py-3 px-6 rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;

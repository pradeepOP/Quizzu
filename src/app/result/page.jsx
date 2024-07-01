const Result = () => {
  return (
    <div className="w-full h-full md:h-[736px] max-w-6xl px-5 mx-auto my-10 md:px-0">
      <h1 className="mt-12 text-[#0E0F0F] text-3xl md:text-5xl font-bold">
        EPS-Topik <span className="text-[#C40031]"> Set 1</span>
      </h1>
      {/* container */}
      <div className="bg-[#F7F7F7] md:h-[90vh] mt-10 md:mt-20 border-2 border-[#BBD6FF] rounded-xl flex flex-col md:flex-row">
        {/* left div */}
        <div className="w-[265px] h-full md:border-r-2 border-[#BBD6FF] pt-6 pl-6   ">
          <h1 className="text-[#0E0F0F] font-bold text-2xl">Your Result</h1>
          <p className=" text-[#C40031] font-bold text-4xl mt-8">10/30</p>

          <div className="mt-12 space-y-7">
            <p className="text-lg">
              Score: <span className="font-bold">10</span>
            </p>
            <p className="text-lg">
              Accuracy: <span className="font-bold">33.33%</span>
            </p>
            <p className="text-lg">
              Time taken: <span className="font-bold">4:16</span>
            </p>
          </div>
        </div>
        {/* right div */}
        <div className="md:flex-1">
          <h1 className="text-[#063173] font-bold text-center text-2xl mt-6 md:mt-0 py-7 border-b-2 border-[#BBD6FF]">
            Test Completed
          </h1>
          <div className="p-6">
            <h2 className=" text-xl md:text-2xl font-bold text-[#0E0F0F]">
              Set 1 test question
            </h2>

            <div className="flex flex-col gap-8 mt-8 md:flex-row ">
              <div className="flex items-center gap-1 ">
                <span className="text-white bg-[#7AC400]  py-1 px-3 rounded-lg">
                  1
                </span>
                <span className="text-lg">Correct</span>
              </div>
              <div className="flex items-center gap-1 ">
                <span className="text-white bg-[#C40031] py-1 px-3 rounded-lg">
                  1
                </span>
                <span className="text-lg">Wrong</span>
              </div>
              <div className="flex items-center gap-1 ">
                <span className="text-white bg-[#585858] py-1 px-3 rounded-lg">
                  1
                </span>
                <span className="text-lg">Not Answered</span>
              </div>
            </div>
            {/* result */}
            <h1 className="mt-10 text-2xl font-bold">Result</h1>
            <div className="flex gap-4 mt-7 ">
              <span className="text-white bg-[#7AC400] py-1 px-3 rounded-lg">
                1
              </span>
              <span className="text-white bg-[#C40031] py-1 px-3 rounded-lg">
                1
              </span>
              <span className="text-white bg-[#585858] py-1 px-3 rounded-lg">
                1
              </span>
            </div>
            {/* buttons */}
            <div className="mt-12 space-x-6">
              <button className=" text-white bg-[#063173] border-2 border-[#063173] py-3 px-6 rounded-xl">
                Check Answer
              </button>
              <button className=" text-[#063173] bg-[#f7f7f7] border-2 border-[#063173] py-3 px-6 rounded-xl">
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Result;

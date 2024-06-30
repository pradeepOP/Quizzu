import Image from "next/image";

const Exam = () => {
  return (
    <div className="w-full h-full md:h-[736px] max-w-6xl px-5 mx-auto my-10 md:px-0">
      <h1 className="mt-12 text-[#0E0F0F] text-5xl font-bold">
        EPS-Topik <span className="text-[#C40031]"> Set 1</span>
      </h1>
      {/* container */}
      <div className="bg-[#F7F7F7]  h-full md:h-[90vh] mt-20 border-2 border-[#BBD6FF] rounded-xl flex flex-col md:flex-row">
        {/* left div */}
        <div className="w-[265px] h-full md:border-r-2 border-[#BBD6FF] pt-6 mx-auto">
          <Image
            src="/time.png"
            alt="time"
            width={161}
            height={161}
            className="object-cover mx-auto "
          />

          <p className="py-4 px-6 bg-[#E5EFFF] mt-16 text-[#0E0F0F] border-l-8 border-[#C40031]">
            Reading
          </p>

          <div className="flex flex-wrap w-4/5 gap-2 mx-auto mt-6">
            <button className=" px-4 py-2 rounded-xl bg-[#C40031] border-2 border-[#C40031] text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-xl border-2 border-[#063173]">
              2
            </button>
            <button className="px-4 py-2 rounded-xl border-2 border-[#063173]">
              3
            </button>
          </div>
        </div>
        {/* right div */}
        <div className=" md:flex-1"></div>
      </div>
    </div>
  );
};
export default Exam;

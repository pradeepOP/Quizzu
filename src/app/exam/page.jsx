const Exam = () => {
  return (
    <div className="w-full h-full md:h-[736px] max-w-6xl px-5 mx-auto my-10 md:px-0">
      <h1 className="mt-12 text-[#0E0F0F] text-5xl font-bold">
        EPS-Topik <span className="text-[#C40031]"> Set 1</span>
      </h1>
      {/* container */}
      <div className="bg-[#F7F7F7]  h-full md:h-[90vh] mt-20 border-2 border-[#BBD6FF] rounded-xl flex flex-col md:flex-row">
        {/* left div */}
        <div className="w-[265px] h-full md:border-r-2 border-[#BBD6FF] pt-10 mx-auto"></div>
        {/* right div */}
        <div className=" md:flex-1"></div>
      </div>
    </div>
  );
};
export default Exam;

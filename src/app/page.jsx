const page = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* hero div */}
      <div className="flex">
        {/* left */}
        <div className="">
          <h1 className="mt-28 text-6xl font-bold text-[#072942] leading-tight">
            Learn <br /> new concepts <br /> each minute
          </h1>
          <p className="text-xl italic font-bold mt-11 border-l-[3px] pl-3 border-primary">
            Master engineering and medical entrance <br /> exams, and excel in
            Korean language <br /> proficiency with our comprehensive MCQ <br />
            platform.
          </p>
          {/* button  */}
          <div className="flex items-center mt-12 gap-14">
            <button className="px-6 py-4 text-white font-bold text-xl tracking-wide bg-gradient-to-r from-[#122738] to-[#00A778]">
              Start solving
            </button>
            <p className="font-bold text-[#122738] text-xl">know more</p>
          </div>
        </div>
        {/* right */}
        <div className="relative">
          <img
            src="home/illustrator.png"
            alt="illustrator"
            width={742}
            height={702}
          />
          <img
            src="home/hero.png"
            alt="hero-img"
            className="absolute top-44 left-36"
          />
        </div>
      </div>
      {/* middle div */}
      <div className="relative mt-20">
        <h1 className="text-6xl font-bold text-center text-[#122738]">
          Welcome to Quizu
        </h1>
        <h2 className="mt-16 text-center text-5xl text-[#230D00]">
          Our Key Features
        </h2>
        <img
          src="home/illustrator2.png"
          alt="line-1"
          className="absolute overflow-visible w-72 h-60 -top-28 -left-32"
        />
        <img
          src="home/illustrator3.png"
          alt="line-2"
          className="absolute overflow-visible h-80 w-80 -top-10 -right-32"
        />
        <img
          src="home/illustrator4.png"
          alt="line-2"
          className="absolute w-64 h-48 overflow-visible -bottom-48 -right-24"
        />

        <div className="flex gap-16 mt-32">
          <div className="">
            <img
              src="home/icon1.svg"
              alt="icon-1"
              width={106}
              height={106}
              className="mx-auto"
            />
            <h1 className="text-[#072942] font-bold text-2xl mt-4 ">
              Extensive MCQ Repository
            </h1>
            <p className="text-[#230D00] text-xl mt-4 text-justify">
              Access thousands of expertly curated questions covering all
              essential topics.
            </p>
          </div>
          <div className="">
            <img
              src="home/icon2.svg"
              alt="icon-1"
              width={106}
              height={106}
              className="mx-auto"
            />
            <h1 className="text-[#072942] font-bold text-2xl mt-4 ">
              Personalized Learning
            </h1>
            <p className="text-[#230D00] text-xl mt-4 text-justify">
              Benefit from adaptive learning algorithms that tailor quizzes to
              your strengths and weaknesses.
            </p>
          </div>
          <div className="">
            <img
              src="home/icon3.svg"
              alt="icon-1"
              width={106}
              height={106}
              className="mx-auto"
            />
            <p className="text-[#072942] font-bold text-2xl mt-4">
              Real-time Analytics
            </p>
            <p className="text-[#230D00] text-xl mt-4 text-justify">
              Track your progress and identify areas for improvement with our
              detailed analytics.
            </p>
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div className="mt-40">
        <h1 className="text-5xl font-bold text-[#122738] tracking-wide">
          Let’ checkout your <span className="text-primary">learning </span>
          journey
        </h1>
        {/* content */}
        <div className="mt-32 space-y-6">
          <div className="flex items-center gap-72 ">
            <div className="w-1/2 space-y-2">
              <h1 className="text-3xl font-bold text-brown ">
                1. Sign Up and Create Your Profile
              </h1>
              <p className="text-[#122738]">
                Get started by creating a personalized profile to track your
                progress and customize your learning experience.
              </p>
            </div>
            <img src="home/icon4.png" alt="icon-4" width={127} height={127} />
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-1/2 space-y-2">
              <h1 className="mt-4 text-3xl font-bold text-brown">
                2. Choose Your Exam or Language Goal
              </h1>
              <p className="text-[#122738] mt-4">
                Select the specific exam or language proficiency goal you are
                preparing for.
              </p>
            </div>
            <img src="home/icon5.png" alt="icon-4" width={127} height={127} />
          </div>
          <div className="flex items-center gap-72 ">
            <div className="w-1/2 space-y-2">
              <h1 className="text-3xl font-bold text-brown ">
                3. Take Diagnostic Quizzes
              </h1>
              <p className="text-[#122738] mt-4">
                Complete initial quizzes to identify your strengths and areas
                for improvement.
              </p>
            </div>
            <img src="home/icon6.png" alt="icon-4" width={127} height={127} />
          </div>
          <div className="flex items-center justify-between ">
            <div className="w-2/3 space-y-2">
              <h1 className="text-3xl font-bold text-brown ">
                4. Track Your Progress and Achieve Your Goal
              </h1>
              <p className="text-[#122738] mt-4">
                Monitor your improvement with real-time analytics and detailed
                performance reports to ensure you reach your academic and
                language learning goals.
              </p>
            </div>
            <img src="home/icon7.png" alt="icon-4" width={127} height={127} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;

import Image from "next/image";
const NewsDetail = () => {
  return (
    <div className="w-full px-5 mx-auto mb-8 mt-14 max-w-7xl md:px-10">
      <h2 className="text-[#454D55] md:text-xl">
        News &gt; Nepal's Engineering Entrance Exam to Feature Practical
        Assessment
      </h2>
      <h1 className=" mt-7 md:mt-14 text-[#000000] text-2xl md:text-6xl font-bold">
        Nepal's Engineering Entrance Exam to Feature Practical Assessment
      </h1>
      <div className="mt-10 md:mt-20">
        <Image
          src="/barca.jpg"
          width={1280}
          height={300}
          alt="news image"
          className="object-top object-cover rounded-t-xl  max-h-[300px]"
        />
        <div className="px-4 bg-white rounded-b-xl">
          <p className="text-[#454D55] md:text-lg pt-1 md:pt-3 ">
            January 23, 2024 - Thursday
          </p>
          <p className="text-[#454D55] md:text-xl mt-4 md:mt-8 pb-6">
            "Engineering is not just about theoretical knowledge; it’s about
            applying that knowledge to solve real-world problems," explained
            Professor Rajan Shrestha from the Institute of Engineering,
            Tribhuvan University. Kathmandu, Nepal (May 30, 2024) — The
            Engineering Entrance Exam (EEE) in Nepal will now include a
            practical skills assessment component, aiming to better evaluate
            candidates' hands-on abilities and technical knowledge. The
            introduction of practical assessments marks a significant shift from
            the traditional theoretical focus of the EEE. "Engineering is not
            just about theoretical knowledge; it’s about applying that knowledge
            to solve real-world problems," explained Professor Rajan Shrestha
            from the Institute of Engineering, Tribhuvan University. "The new
            practical component will help us identify students who are not only
            academically proficient but also skilled in practical applications,
            which is crucial for their future careers." Kathmandu, Nepal (May
            30, 2024) — The Engineering Entrance Exam (EEE) in Nepal will now
            include a practical skills assessment component, aiming to better
            evaluate candidates' hands-on abilities and technical knowledge. The
            introduction of practical assessments marks a significant shift from
            the traditional theoretical focus of the EEE. The introduction of
            practical assessments marks a significant shift from the traditional
            theoretical focus of the EEE. "Engineering is not just about
            theoretical knowledge; it’s about applying that knowledge to solve
            real-world problems," explained Professor Rajan Shrestha from the
            Institute of Engineering, Tribhuvan University. "The new practical
            component will help us identify students who are not only
            academically proficient but also skilled in practical applications,
            which is crucial for their future careers." The new practical
            component will help us identify students who are not only
            academically proficient but also skilled in practical applications,
            which is crucial for their future careers."
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsDetail;

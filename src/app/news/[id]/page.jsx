"use client";
import ApiRequest from "@/utils/apiRequest";
import Image from "next/image";
<<<<<<< HEAD
=======
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PropagateLoader from "react-spinners/PropagateLoader";
>>>>>>> e0ed376f5b69af53566d302da97c40224b1c09e1

const NewsDetail = () => {
  const [newsDetail, setNewsDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const formattedDate = new Date(newsDetail?.createdAt).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const fetchNewsDetails = async () => {
    try {
      setLoading(true);
      const res = await ApiRequest.get(`/news/${id}`);
      console.log(res);
      setNewsDetail(res?.data?.data?.singleNews);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching news detail", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNewsDetails();
  }, [id]);
  return (
    <div className="w-full px-5 mx-auto mb-8 mt-14 max-w-7xl md:px-10">
<<<<<<< HEAD
      <h2 className="text-[#454D55] md:text-xl">
        News &gt; Nepal&apos;s Engineering Entrance Exam to Feature Practical
        Assessment
      </h2>
      <h1 className=" mt-7 md:mt-14 text-[#000000] text-2xl md:text-6xl font-bold">
        Nepal&apos;s Engineering Entrance Exam to Feature Practical Assessment
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
            &quot;Engineering is not just about theoretical knowledge; it&apos;s
            about applying that knowledge to solve real-world problems,&quot;
            explained Professor Rajan Shrestha from the Institute of
            Engineering, Tribhuvan University. Kathmandu, Nepal (May 30, 2024)
            &mdash; The Engineering Entrance Exam (EEE) in Nepal will now
            include a practical skills assessment component, aiming to better
            evaluate candidates&apos; hands-on abilities and technical
            knowledge. The introduction of practical assessments marks a
            significant shift from the traditional theoretical focus of the EEE.
            &quot;Engineering is not just about theoretical knowledge; it&apos;s
            about applying that knowledge to solve real-world problems,&quot;
            explained Professor Rajan Shrestha from the Institute of
            Engineering, Tribhuvan University. &quot;The new practical component
            will help us identify students who are not only academically
            proficient but also skilled in practical applications, which is
            crucial for their future careers.&quot; Kathmandu, Nepal (May 30,
            2024) &mdash; The Engineering Entrance Exam (EEE) in Nepal will now
            include a practical skills assessment component, aiming to better
            evaluate candidates&apos; hands-on abilities and technical
            knowledge. The introduction of practical assessments marks a
            significant shift from the traditional theoretical focus of the EEE.
            The introduction of practical assessments marks a significant shift
            from the traditional theoretical focus of the EEE. &quot;Engineering
            is not just about theoretical knowledge; it&apos;s about applying
            that knowledge to solve real-world problems,&quot; explained
            Professor Rajan Shrestha from the Institute of Engineering,
            Tribhuvan University. &quot;The new practical component will help us
            identify students who are not only academically proficient but also
            skilled in practical applications, which is crucial for their future
            careers.&quot; The new practical component will help us identify
            students who are not only academically proficient but also skilled
            in practical applications, which is crucial for their future
            careers.&quot;
          </p>
=======
      {loading ? (
        <div className="flex items-center justify-center h-[50%]">
          <PropagateLoader color="#0eb1a6" loading={loading} size={20} />
>>>>>>> e0ed376f5b69af53566d302da97c40224b1c09e1
        </div>
      ) : (
        <>
          <h2 className="text-[#454D55] md:text-xl">
            News &gt; {newsDetail.title}
          </h2>
          <h1 className=" mt-7 md:mt-14 text-[#000000] text-2xl md:text-6xl font-bold">
            {newsDetail?.title}
          </h1>
          <div className="mt-10 md:mt-20 bg-slate-400 rounded-xl">
            <Image
              src={newsDetail?.coverImage}
              width={1280}
              height={300}
              alt="news image"
              className="object-top object-contain rounded-t-xl  max-h-[300px]"
            />
            <div className="px-4 bg-white rounded-b-xl">
              <p className="text-[#454D55] md:text-lg pt-1 md:pt-3 ">
                {formattedDate}
              </p>
              <p className="text-[#454D55] md:text-xl mt-4 md:mt-8 pb-6">
                {newsDetail?.description}
                <br />
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsDetail;

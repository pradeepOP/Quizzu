"use client";
import ApiRequest from "@/utils/apiRequest";
import { useEffect, useState } from "react";

import NewsCard from "@/components/NewsCard";

const News = () => {
  const [news, setNews] = useState([]);
  console.log(news);

  const fetchNews = async () => {
    try {
      const res = await ApiRequest.get("/news");
      setNews(res?.data?.data?.news);
      console.log(res);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="w-full px-5 pb-10 mx-auto mt-14 max-w-7xl md:px-10">
      <h1 className="text-[#0E0F0F] font-bold text-3xl md:text-5xl">News</h1>
      <div className="mt-8 md:mt-12 space-y-28">
        {/* news card */}
        {news?.map((item) => (
          <NewsCard key={item._id} news={item} />
        ))}
      </div>
    </div>
  );
};
export default News;

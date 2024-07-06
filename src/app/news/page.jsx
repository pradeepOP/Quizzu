"use client";
import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";
import ApiRequest from "@/utils/apiRequest";
import NewsCard from "@/components/NewsCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import arrow icons as needed

const News = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNews = async (page) => {
    try {
      setIsLoading(true);
      const res = await ApiRequest.get(`/news?page=${page}&limit=6`);
      console.log(res);
      setNews(res?.data?.data?.news);
      setTotalPages(res?.data?.data?.totalPages);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  console.log(currentPage, totalPages);

  return (
    <div className="w-full px-5 pb-10 mx-auto mt-14 max-w-7xl md:px-10">
      {isLoading ? (
        <div className="flex items-center justify-center h-[50%]">
          <PropagateLoader color="#0eb1a6" loading={isLoading} size={20} />
        </div>
      ) : (
        <>
          <h1 className="text-[#0E0F0F] font-bold text-3xl md:text-5xl">
            News
          </h1>
          <div className="mt-8 md:mt-12 space-y-28">
            {/* News Cards */}
            {news?.map((item) => (
              <NewsCard key={item._id} news={item} />
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-4 pt-5">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="px-4 py-2 flex items-center text-white bg-gray-600 rounded-md"
              >
                <IoIosArrowBack className="mr-1" /> Previous
              </button>
            )}
            <span className="text-brown mx-2 text-xl">
              Page {currentPage}
              {totalPages > 1 && ` of ${totalPages}`}
            </span>
            {currentPage < totalPages && (
              <button
                onClick={handleNextPage}
                className="px-4 py-2 flex items-center text-white bg-gray-600 rounded-md"
              >
                Next <IoIosArrowForward className="ml-1" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default News;

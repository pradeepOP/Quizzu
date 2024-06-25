import NewsCard from "@/components/NewsCard";
const News = () => {
  return (
    <div className="w-full px-5 mx-auto mt-14 max-w-7xl md:px-10">
      <h1 className="text-[#0E0F0F] font-bold text-3xl md:text-5xl">News</h1>
      <div className="mt-8 md:mt-12 space-y-28">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};
export default News;

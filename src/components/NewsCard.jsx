import Image from "next/image";
import Link from "next/link";
const NewsCard = () => {
  return (
    <div className="max-w-[1140px] max-h-[528px]  ">
      <div className="">
        <Image
          src="/barca.jpg"
          width={1140}
          height={269}
          alt="News Image"
          className="object-top object-cover rounded-t-xl max-h-[269px]"
        />
      </div>
      <div className="px-4 bg-white rounded-b-xl">
        <p className="text-[#454D55] md:text-lg pt-1 md:pt-3 ">
          January 23, 2024
        </p>
        <h1 className="text-[#000000] font-bold text-xl md:text-4xl mt-4 md:mt-8">
          Nepal &apos;s Engineering Entrance Exam to Feature Practical
          Assessment
        </h1>
        <p className="text-[#454D55] md:text-xl mt-4 md:mt-8">
          "Engineering is not just about theoretical knowledge; it’s about
          applying that knowledge to solve real-world problems," explained
          Professor Rajan Shrestha from the Institute of Engineering, Tribhuvan
          University.
        </p>
        <Link href="/news/1">
          <button className="my-4 bg-[#063173] hover:bg-[#012b6d] duration-300 text-white font-bold px-7 py-3 rounded-xl">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NewsCard;

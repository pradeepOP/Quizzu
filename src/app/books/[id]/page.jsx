"use client";
import ApiRequest from "@/utils/apiRequest";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  // console.log(id);

  console.log(book);
  const fetchBookDetails = async () => {
    try {
      const res = await ApiRequest.get(`/book/${id}`);
      console.log(res);
      setBook(res?.data?.data?.singleBook);
    } catch (error) {
      console.log("Error fetching book details", error);
    }
  };
  useEffect(() => {
    fetchBookDetails();
  }, [id]);
  return (
    <div className="w-[90%] px-5 mx-auto mt-6 max-w-[1140px] md:h-[800px] mb-10 bg-white border-2 rounded-xl border-[#BBD6FF] ">
      <div className="flex flex-col h-full md:flex-row">
        {/* left div */}
        <div className=" flex w-60 md:flex-col gap-12 mt-4 md:mt-0 items-center md:border-r-2  border-[#BBD6FF]">
          <div className="w-4/5 mx-auto md:mt-10">
            <Image
              src={book.coverImage}
              width={162}
              height={243}
              className="w-[162px] h-[243px] "
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto md:w-4/5 md:gap-9">
            <p className="text-[#0E0F0F] ">
              <span className="font-semibold">
                Author’s Name: <br />
              </span>
              {book.author}
            </p>
            <p className="text-[#0E0F0F] ">
              <span className="font-semibold">
                Publication: <br />
              </span>
              {book.publication}
            </p>
            <p className="text-[#0E0F0F] ">
              <span className="font-semibold">
                Edition: <br />
              </span>
              {book.edition}
            </p>
          </div>
        </div>
        {/* right div */}
        <div className=" md:flex-1">
          <h1 className="text-[#0E0F0F] font-bold italic text-3xl md:text-5xl  mt-6 md:mt-0 py-7 pl-10  border-b-2 border-[#BBD6FF]">
            {book.title}
          </h1>
          <p className="md:w-[752px] md:h-[408px] pt-9 text-sm md:pl-10 overflow-y-auto">
            {book.description}
          </p>
          <button className="md:mt-36 mt-8 md:ml-10 mb-4 bg-[#063173] py-2 px-4 rounded-xl text-white">
            Mark as favourite
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;

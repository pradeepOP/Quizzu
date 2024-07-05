"use client";
import BookCard from "@/components/BookCard";
import ApiRequest from "@/utils/apiRequest";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  const fetchBooks = async () => {
    try {
      const res = await ApiRequest.get("/book");
      console.log(res);
      setBooks(res?.data?.data?.books);
    } catch (error) {
      console.log("Error while fetching books", error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="w-full px-5 mx-auto mt-6 max-w-7xl md:px-16">
      <h1 className="text-[#0E0F0F] font-bold text-3xl md:text-5xl">
        Quizzu Library
      </h1>
      <div className="grid mt-16 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-20">
        {books.map((book) => (
          <BookCard key={books._id} book={book} />
        ))}
        {/* <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard /> */}
      </div>
    </div>
  );
};
export default Books;

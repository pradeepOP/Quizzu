import BookCard from "@/components/BookCard";

const Books = () => {
  return (
    <div className="w-full px-5 mx-auto mt-6 max-w-7xl md:px-16">
      <h1 className="text-[#0E0F0F] font-bold text-3xl md:text-5xl">
        Quizzu Library
      </h1>
      <div className="grid mt-16 md:grid-cols-3 gap-x-6 gap-y-20">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};
export default Books;

import Image from "next/image";
import Link from "next/link";
const BookCard = () => {
  return (
    <Link href="/books/1">
      <div className="w-[364px] h-[325px] ">
        <div className="bg-[#C4C4C4] rounded-t-xl">
          <Image
            src="/book.png"
            width={162}
            height={243}
            alt="book image"
            className="pt-2 mx-auto"
          />
        </div>

        <p className="py-4 text-center text-[#000000] font-bold text-xl bg-white rounded-b-xl">
          A Million To One
        </p>
      </div>
    </Link>
  );
};
export default BookCard;

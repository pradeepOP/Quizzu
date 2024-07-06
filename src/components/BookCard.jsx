import Image from "next/image";
import Link from "next/link";
const BookCard = ({ book }) => {
  console.log(book);
  return (
    <Link href={`/books/${book?._id}`}>
      <div className="w-[364px] h-[325px] ">
        <div className="bg-[#C4C4C4] rounded-t-xl">
          <Image
            src={book?.coverImage}
            width={162}
            height={243}
<<<<<<< HEAD
            alt="book image"
            className="pt-2 mx-auto"
=======
            className="pt-2 mx-auto  w-[162px] h-[243px]"
            alt="book image"
>>>>>>> e0ed376f5b69af53566d302da97c40224b1c09e1
          />
        </div>

        <p className="py-4 text-center text-[#000000] font-bold text-xl bg-white rounded-b-xl">
          {book?.title}
        </p>
      </div>
    </Link>
  );
};
export default BookCard;

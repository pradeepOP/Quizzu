import Image from "next/image";
const BookCard = () => {
  return (
    <div className="w-[364px] h-[325px] ">
      <div className="bg-[#C4C4C4] rounded-t-xl">
        <Image
          src="/sawako.jpg"
          width={291}
          height={269}
          className="p-2 mx-auto"
        />
      </div>
      <p className="py-4 text-center text-[#000000] font-bold text-xl bg-white rounded-b-xl">
        From Me to You
      </p>
    </div>
  );
};
export default BookCard;

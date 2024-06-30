import Image from "next/image";
const ExamSetCard = () => {
  return (
    <div className="rounded-xl w-[365px]  ">
      <Image src="/setImage.jpeg" width={365} height={325} alt="setImage" />
      <p className="py-3 text-lg font-bold text-center text-black bg-white rounded-b-xl">
        Set 1
      </p>
    </div>
  );
};
export default ExamSetCard;

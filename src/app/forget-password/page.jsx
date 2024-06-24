import Link from "next/link";
const ForgetPassword = () => {
  return (
    <div className="flex flex-col gap-20 px-5 pb-40 mx-auto mt-10 md:px-0 md:mt-16 md:flex-row max-w-7xl">
      {/* left div with image  */}
      <div className="hidden md:inline">
        <img src="/login.png" alt="login" width={526} height={594} />
      </div>
      {/* right div with forms */}
      <div>
        <h1 className="text-xl italic font-bold md:text-3xl text-brown">
          Don’t worry, we got your back !!
        </h1>
        {/* form */}
        <form className="mt-8 md:mt-16">
          <div className="flex flex-col h-20 px-5 py-3 mb-4 bg-white border-l-4 border-primary">
            <label className="italic font-bold md:text-xl text-brown">
              Email Address
            </label>
            <input
              type="email"
              className="outline-none pt-1 font-bold italic md:text-xl text-[#122738] placeholder:font-bold placeholder:italic placeholder:text-[#122738] md:placeholder:text-xl"
              placeholder="pradeepkazi38@gmail.com"
            />
          </div>
          <button
            type="submit"
            className="text-[#2F3336] md:text-xl font-bold italic">
            Send OTP
          </button>
        </form>

        {/* OTP code */}
        <div className="flex flex-col h-20 px-5 py-3 mt-6 bg-white md:mt-20">
          <label
            htmlFor=""
            className="font-bold text-[#2F3336] italic md:text-xl">
            OTP
          </label>
          <input
            type="text"
            className="outline-none pt-1 font-bold italic md:text-xl text-[#122738] placeholder:text-[#122738] md:placeholder:text-xl placeholder:italic placeholder:font-bold"
            placeholder="123456"
          />
        </div>

        <div className="flex items-center justify-between mt-8 md:mt-40">
          <button className="px-4 py-3 italic font-bold text-white duration-300 md:text-xl bg-primary hover:bg-primary/80">
            Verify OTP
          </button>
          <Link href="/login">
            <button className="px-4 py-3 md:text-xl italic font-bold text-[#122738] ">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;

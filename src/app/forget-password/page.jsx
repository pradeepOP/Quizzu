import Link from "next/link";
const ForgetPassword = () => {
  return (
    <div className="flex gap-20 pb-40 mx-auto mt-16 max-w-7xl">
      {/* left div with image  */}
      <div>
        <img src="/login.png" alt="login" width={526} height={594} />
      </div>
      {/* right div with forms */}
      <div>
        <h1 className="text-3xl italic font-bold text-brown">
          Don’t worry, we got your back !!
        </h1>
        {/* form */}
        <form className="mt-16">
          <div className="flex flex-col h-20 px-5 py-3 mb-4 bg-white border-l-4 border-primary">
            <label className="text-xl italic font-bold text-brown">
              Email Address
            </label>
            <input
              type="email"
              className="outline-none pt-1 font-bold italic text-xl text-[#122738] placeholder:font-bold placeholder:italic placeholder:text-[#122738] placeholder:text-xl"
              placeholder="pradeepkazi38@gmail.com"
            />
          </div>
          <button
            type="submit"
            className="text-[#2F3336] text-xl font-bold italic">
            Send OTP
          </button>
        </form>

        {/* OTP code */}
        <div className="flex flex-col h-20 px-5 py-3 mt-20 bg-white">
          <label htmlFor="" className="font-bold text-[#2F3336] italic text-xl">
            OTP
          </label>
          <input
            type="text"
            className="outline-none pt-1 font-bold italic text-xl text-[#122738] placeholder:text-[#122738] placeholder:text-xl placeholder:italic placeholder:font-bold"
            placeholder="123456"
          />
        </div>

        <div className="flex items-center justify-between mt-40">
          <button className="px-4 py-3 text-xl italic font-bold text-white bg-primary">
            Verify OTP
          </button>
          <Link href="/login">
            <button className="px-4 py-3 text-xl italic font-bold text-[#122738] ">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;

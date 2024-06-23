import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex gap-20 pb-40 mx-auto mt-16 max-w-7xl">
      {/* left div with image  */}
      <div>
        <img src="/login.png" alt="login" width={526} height={594} />
      </div>
      {/* right div with forms */}
      <div>
        <h1 className="text-3xl italic font-bold text-brown">
          Hello User, you will have a great <br /> journey
        </h1>
        <form className="mt-12">
          <div className="flex flex-col h-20 px-5 py-3 bg-white mb-9 ">
            <label className="text-xl italic font-bold text-brown">
              Full Name
            </label>
            <input
              type="text"
              className="outline-none pt-1 placeholder:font-bold placeholder:italic placeholder:text-[#122738] placeholder:text-xl font-bold italic text-xl text-[#122738]"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col h-20 px-5 py-3 bg-white border-l-4 mb-9 border-primary">
            <label className="text-xl italic font-bold text-brown">
              Email Address
            </label>
            <input
              type="email"
              className="outline-none pt-1 placeholder:font-bold placeholder:italic placeholder:text-[#122738] placeholder:text-xl font-bold italic text-xl text-[#122738]"
              placeholder="pradeepkazi38@gmail.com"
            />
          </div>
          <div className="flex flex-col h-20 px-5 py-3 bg-white">
            <label className="text-xl italic font-bold text-brown">
              Password
            </label>
            <input
              type="password"
              className="outline-none pt-1 placeholder:font-bold placeholder:italic placeholder:text-[#122738] placeholder:text-xl"
              placeholder="****************"
            />
          </div>

          <div className="space-x-16 mt-14">
            <button className="px-4 py-3 text-xl italic font-bold text-white bg-primary">
              Signup
            </button>
            <Link href="/login">
              <button className="px-4 py-3 text-xl italic font-bold bg-[#FFFFFF]  text-[#122738] border-2 border-[#122738]">
                Login
              </button>
            </Link>
          </div>
        </form>

        {/* login with google and facebook */}
        <div className="flex items-center justify-between mt-20">
          <p className="text-xl italic font-bold text-brown">or login with</p>

          <div className="flex gap-12">
            <p className="text-[#122738] font-bold text-xl italic">Facebook</p>
            <p className="text-[#122738] font-bold text-xl italic">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

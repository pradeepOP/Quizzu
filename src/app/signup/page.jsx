import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex flex-col w-full gap-20 px-5 pb-40 mx-auto mt-8 md:flex-row md:px-0 md:mt-16 max-w-7xl">
      {/* left div with image  */}
      <div className="hidden md:inline">
        <img src="/login.png" alt="login" width={526} height={594} />
      </div>
      {/* right div with forms */}
      <div>
        <h1 className="text-xl italic font-bold md:text-3xl text-brown">
          Hello User, you will have a great <br /> journey
        </h1>
        <form className="mt-6">
          <div className="flex flex-col h-20 px-5 py-3 bg-white mb-9 ">
            <label className="italic font-bold md:text-xl text-brown">
              Full Name
            </label>
            <input
              type="text"
              className="outline-none pt-1 placeholder:font-bold placeholder:italic placeholder:text-[#122738] md:placeholder:text-xlfont-bold italic md:text-xl text-[#122738]"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col h-20 px-5 py-3 bg-white border-l-4 mb-9 border-primary">
            <label className="italic font-bold md:text-xl text-brown">
              Email Address
            </label>
            <input
              type="email"
              className="outline-none pt-1 placeholder:font-bold placeholder:italic placeholder:text-[#122738] md:placeholder:text-xl font-bold italic md:text-xl text-[#122738]"
              placeholder="pradeepkazi38@gmail.com"
            />
          </div>
          <div className="flex flex-col h-20 px-5 py-3 bg-white">
            <label className="italic font-bold md:text-xl text-brown">
              Password
            </label>
            <input
              type="password"
              className="outline-none pt-1 placeholder:font-bold placeholder:italic placeholder:text-[#122738] md:placeholder:text-xl"
              placeholder="****************"
            />
          </div>

          <div className="mt-6 space-x-16">
            <button className="px-4 py-3 italic font-bold text-white duration-300 md:text-xl bg-primary hover:bg-primary/80">
              Signup
            </button>
            <Link href="/login">
              <button className="px-4 py-3 md:text-xl italic font-bold bg-[#FFFFFF]  text-[#122738] border-2 border-[#122738]">
                Login
              </button>
            </Link>
          </div>
        </form>

        {/* login with google and facebook */}
        <div className="flex items-center justify-between mt-6 md:mt-20">
          <p className="italic font-bold md:text-xl text-brown">
            or login with
          </p>

          <div className="flex gap-12">
            <p className="text-[#122738] font-bold md:text-xl italic">
              Facebook
            </p>
            <p className="text-[#122738] font-bold md:text-xl italic">Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

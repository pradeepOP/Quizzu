import Link from "next/link";
const Login = () => {
  return (
    <div className="flex flex-col w-full gap-20 px-5 pb-40 mx-auto mt-8 md:mt-16 md:flex-row max-w-7xl md:px-0">
      {/* left div with image  */}
      <div className="hidden md:inline">
        <img src="/login.png" alt="login" className="w-[526px] h-[594px] " />
      </div>
      {/* right div with forms */}
      <div>
        <h1 className="text-xl italic font-bold md:text-3xl text-brown">
          Welcome Back,You have been missed
        </h1>
        <form className="mt-8 md:mt-20">
          <div className="flex flex-col h-20 px-5 py-3 bg-white border-l-4 mb-9 border-primary">
            <label className="italic font-bold md:text-xl text-brown">
              Email Address
            </label>
            <input
              type="email"
              className="outline-none pt-1 font-bold italic md:text-xl text-[#122738] placeholder:font-bold placeholder:italic placeholder:text-[#122738] md:placeholder:text-xl"
              placeholder="pradeepkazi38@gmail.com"
            />
          </div>
          <div className="flex flex-col h-20 px-5 py-3 bg-white">
            <label className="italic font-bold md:text-xl text-brown">
              Password
            </label>
            <input
              type="password"
              className="outline-none pt-2 placeholder:font-bold placeholder:italic placeholder:text-[#122738] placeholder:text-xl"
              placeholder="****************"
            />
          </div>
          {/* check box and forget password */}
          <div className="flex items-center justify-between pt-9">
            <div>
              <input type="checkbox" value="" />
              <label
                htmlFor=""
                className="pl-1 text-lg italic font-bold md:text-xl text-brown">
                Remember Me
              </label>
            </div>
            <Link href="/forget-password">
              <p className="text-lg italic font-bold md:text-xl text-brown">
                Forgot Password?
              </p>
            </Link>
          </div>
          <div className="mt-12 space-x-16 md:mt-14">
            <button className="px-4 py-3 italic font-bold text-white duration-300 md:text-xl bg-primary hover:bg-primary/80">
              Login
            </button>
            <Link href="/signup">
              <button className="px-4 py-3 md:text-xl italic font-bold bg-[#FFFFFF]  text-[#122738] border-2 border-[#122738]">
                Signup
              </button>
            </Link>
          </div>
        </form>

        {/* login with google and facebook */}
        <div className="flex items-center justify-between mt-10 md:mt-20">
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
export default Login;

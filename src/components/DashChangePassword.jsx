const DashChangePassword = () => {
  return (
    <div className="px-10 py-10 ">
      <form action="" className="space-y-8">
        <div className="flex items-center justify-between">
          <span className="text-[#000000] font-bold text-sm  md:text-lg">
            Old Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className=" p-3 border-2 text-[#0E0F0F] bg-[#F7F7F7] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-3/4 h-14 placeholder:text-lg placeholder:text-[#0E0F0F]"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#000000] font-bold text-sm md:text-lg">
            New Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className=" p-3 border-2 text-[#0E0F0F] bg-[#F7F7F7] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-3/4 h-14 placeholder:text-lg placeholder:text-[#0E0F0F]"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[#000000] font-bold text-sm md:text-lg">
            Confirm Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className=" p-3 border-2 text-[#0E0F0F] bg-[#F7F7F7] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-3/4 h-14 placeholder:text-lg placeholder:text-[#0E0F0F]"
          />
        </div>
        <button className="mt-20  py-3 px-6 rounded-xl bg-[#063173] text-white">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default DashChangePassword;

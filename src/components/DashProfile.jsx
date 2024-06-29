const DashProfile = ({ user }) => {
  return (
    <div className="px-10 py-10 space-y-8">
      <div className="flex items-center gap-3 md:justify-between">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Username
        </span>
        <span className=" p-3 border-2 text-[#0E0F0F] md:text-lg border-[#CFCFCF] rounded-xl  w-4/5 h-14">
          {user.fullname}
        </span>
      </div>
      <div className="flex items-center justify-between ">
        <span className="text-[#000000] font-bold text-sm  md:text-lg">
          Email
        </span>
        <span className=" p-3 border-2 text-[#0E0F0F] text-sm  md:text-lg border-[#CFCFCF] rounded-xl w-4/5 h-14">
          {user.email}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Mobile No.
        </span>
        <span className=" p-3 border-2 text-[#0E0F0F] text-sm  md:text-lg border-[#CFCFCF] rounded-xl w-4/5 h-14">
          {user.phNumber ? user.phNumber : "No phone number yet"}
        </span>
      </div>
    </div>
  );
};
export default DashProfile;

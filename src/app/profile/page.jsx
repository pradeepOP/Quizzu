"use client";
import DashChangePassword from "@/components/DashChangePassword";
import DashExamHistory from "@/components/DashExamHistory";
import DashProfile from "@/components/DashProfile";
import { useAuth } from "@/context/userContext";
import { useState } from "react";
const Profile = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="w-full h-full md:h-[736px] max-w-6xl px-5 mx-auto my-10 md:px-0">
      {/* container */}
      <div className="bg-[#F7F7F7]  h-full md:h-[90vh] border-2 border-[#BBD6FF] rounded-xl flex flex-col md:flex-row">
        {/* left div */}
        <div className="w-[265px] h-full md:border-r-2 border-[#BBD6FF] pt-10 mx-auto">
          {user && (
            <>
              {/* TODO: remove static url and static fullname */}
              <img
                src={
                  user.avatar ||
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="profile"
                className="w-[129px] h-[129px] rounded-full mx-auto object-cover"
              />
              <p className="text-center text-[#0E0F0F] font-semibold">
                {user.fullname || "Sandip muji"}
              </p>
            </>
          )}
          <div className="mt-12">
            <p
              className={`px-6 py-3 cursor-pointer border-l-4  ${
                activeTab === "profile"
                  ? "bg-[#E5EFFF] border-[#C40031]"
                  : "border-transparent "
              } `}
              onClick={() => setActiveTab("profile")}>
              Profile
            </p>

            <p
              className={`px-6 py-3 cursor-pointer border-l-4  ${
                activeTab === "changePassword"
                  ? "bg-[#E5EFFF]  border-[#C40031]"
                  : "border-transparent "
              } `}
              onClick={() => setActiveTab("changePassword")}>
              Change Password
            </p>

            <p
              className={`px-6 py-3 cursor-pointer  border-l-4   ${
                activeTab === "exam-detail"
                  ? "bg-[#E5EFFF]  border-[#C40031]"
                  : "border-transparent "
              } `}
              onClick={() => setActiveTab("exam-detail")}>
              Exam Details
            </p>
          </div>
        </div>
        {/* right div */}
        <div className=" md:flex-1">
          <h1 className="text-[#0E0F0F] font-bold text-3xl md:text-5xl border-b-2 border-[#BBD6FF] w-full pt-10 pl-10 pb-8 tracking-wide">
            {activeTab === "profile"
              ? "Profile"
              : activeTab === "changePassword"
              ? "Change Password"
              : "Exam History"}
          </h1>
          {/* details */}
          {activeTab === "profile" && <DashProfile user={user} />}
          {activeTab === "changePassword" && <DashChangePassword />}
          {activeTab === "exam-detail" && <DashExamHistory />}
        </div>
      </div>
    </div>
  );
};
export default Profile;

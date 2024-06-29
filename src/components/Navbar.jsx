"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "@/context/userContext";
import ApiRequest from "@/utils/apiRequest";
import { redirect } from "next/dist/server/api-utils";

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuth();

  const [show, setShow] = useState(false);

  const toggleHamburger = () => setShow(!show);

  const handleLougout = async () => {
    try {
      const res = await ApiRequest.get("/user/logout");
      if (res.status === 200) {
        setIsAuthenticated(false);
        setUser({});
        redirect("/");
      }
    } catch (error) {
      setUser({});
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="flex items-center justify-between w-full px-4 pt-10 mx-auto text-black md:px-0 max-w-7xl ">
      {/* logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          width={158}
          height={79}
          alt=""
          className="z-20"
        />
      </Link>
      {/* hamburgerIcon */}
      <button onClick={toggleHamburger} className="z-50 text-2xl md:hidden">
        {show ? <FaTimes /> : <FaBars />}
      </button>
      {/* mobile screen */}
      {show && (
        <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-white md:hidden">
          <ul className="flex flex-col items-center gap-8 text-xl">
            <li>
              <Link href="/" onClick={toggleHamburger}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleHamburger}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/books" onClick={toggleHamburger}>
                Books
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={toggleHamburger}>
                News
              </Link>
            </li>

            {isAuthenticated ? (
              <li>Profile</li>
            ) : (
              <li>
                <Link href="/signup" onClick={toggleHamburger}>
                  Register
                </Link>
              </li>
            )}

            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLougout();
                  toggleHamburger();
                }}>
                Logout
              </button>
            ) : (
              <li>
                <Link href="/login" onClick={toggleHamburger}>
                  <button className="px-8 py-3 text-2xl font-bold text-primary border-[2px] border-primary hover:bg-primary hover:text-white duration-300">
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}

      {/* navigation */}
      <ul className="items-center hidden gap-24 text-xl md:flex">
        {/* //TODO: add border on active or hover */}
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        {isAuthenticated ? (
          <button onClick={handleLougout}>Logout</button>
        ) : (
          <li className="">
            <Link href="/signup">Register</Link>
          </li>
        )}

        {isAuthenticated && user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              width={48}
              height={48}
              className="rounded-full"
            />
            {/* TODO: add dropdown instead of logout button */}
            <p className="text-[#063173] font-semibold ">{user.fullname}</p>
          </div>
        ) : (
          <li>
            <Link href="/login">
              <button className="px-8 py-3 text-2xl font-bold text-primary border-[2px] border-primary hover:bg-primary hover:text-white duration-300 ">
                Login
              </button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Navbar;

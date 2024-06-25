"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleHamburger = () => setShow(!show);
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
            <li>Books</li>
            <li>News</li>
            <li>
              <Link href="/signup" onClick={toggleHamburger}>
                Register
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={toggleHamburger}>
                <button className="px-8 py-3 text-2xl font-bold text-primary border-[2px] border-primary hover:bg-primary hover:text-white duration-300">
                  Login
                </button>
              </Link>
            </li>
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
        <li>Books</li>
        <li>News</li>
        <li className="">
          <Link href="/signup">Register</Link>
        </li>
        <li>
          <Link href="/login">
            <button className="px-8 py-3 text-2xl font-bold text-primary border-[2px] border-primary hover:bg-primary hover:text-white duration-300 ">
              Login
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

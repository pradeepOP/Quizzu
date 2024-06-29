import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 ">
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap">
          {/* Logo and Description */}
          <div className="w-[380px] mb-6 md:mb-0">
            <div className="flex items-center mb-7">
              <Image src="/logo.png" alt="Quizu Logo" width={198} height={79} />
            </div>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebook
                  className="text-black hover:text-gray-500"
                  size={24}
                />
              </Link>
              <Link href="https://www.instagram.com" aria-label="Instagram">
                <FaInstagram
                  className="text-black hover:text-gray-500"
                  size={24}
                />
              </Link>
              <Link href="https://www.youtube.com" aria-label="YouTube">
                <FaYoutube
                  className="text-black hover:text-gray-500"
                  size={24}
                />
              </Link>
              <Link href="https://www.twitter.com" aria-label="Twitter">
                <FaTwitter
                  className="text-black hover:text-gray-500"
                  size={24}
                />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-16">
            {/* About Section */}
            <div className="w-1/2 lg:w-auto mb-6 md:mb-0">
              <h2 className="mb-4 text-lg font-bold">About</h2>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="mb-2">
                  <Link href="/about">About</Link>
                </li>
                <li className="mb-2">
                  <Link href="/news">News & Blogs</Link>
                </li>
                <li>
                  <Link href="#">Help & Supports</Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="w-1/2 lg:w-auto mb-6 md:mb-0">
              <h2 className="mb-4 text-lg font-bold">Company</h2>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <Link href="#">How we work</Link>
                </li>
                <li className="mb-2">
                  <Link href="#">Terms of service</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="w-full lg:w-auto">
              <h2 className="mb-4 text-lg font-bold">Contact Us</h2>
              <ul className="text-gray-700">
                <li className="mb-2">Kathmandu, Nepal</li>
                <li className="mb-2">+977 01 4578961</li>
                <li className="mb-2">connect@quizu.com.np</li>
                <li>quizu.com.np</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
      </div>
      <div className="mt-8 text-center text-gray-700">
        © 2024 Quizu. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

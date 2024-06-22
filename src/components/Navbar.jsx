import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-10 mx-auto text-black max-w-7xl ">
      {/* logo */}
      <Link href="/">
        <img src="/logo.png" width={158} height={79} alt="" />
      </Link>
      {/* navigation */}
      <ul className="flex items-center gap-24 text-xl">
        {/* //TODO: add border on active or hover */}
        <li>Home</li>
        <li>About us</li>
        <li>Books</li>
        <li>News</li>
        <li className="">Register</li>
        <li>
          <button className="px-8 py-3 text-2xl font-bold text-primary border-[2px] border-primary ">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

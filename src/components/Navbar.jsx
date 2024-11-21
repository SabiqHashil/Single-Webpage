import { CgMenuGridO } from "react-icons/cg";
import { FaShareAlt, FaEllipsisH, FaSearch } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-8  bg-yellow-50">
      <div className="flex items-center gap-7 mx-10 space-x-2">
        <div className="flex cursor-pointer gap-2 hover:bg-white hover:border border-[#3d146d] p-2 rounded-lg">
          <h1 className="text-2xl font-bold text-[#3d146d]">Thema </h1>
          <h1 className="bg-yellow-400 text-sm font-semibold text-[#3d146d] p-1 rounded">
            Home
          </h1>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer hover:bg-yellow-200 hover:rounded-full hover:border border-yellow-600 hover:p-3 p-4 rounded-md">
          <CgMenuGridO className="text-[#3d146d] text-xl" />
          <span className="text-[#3d146d] font-lg font-semibold">Courses</span>
        </div>

        <div className="flex items-start bg-white border border-[#3d146d]  rounded-full px-4 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search courses, or instructors"
            className="flex-grow w-56 text-sm p-2 font-semibold bg-transparent text-[#3d146d] focus:outline-none"
          />
          <div className=" p-2.5 border rounded-full  border-[#3d146d] ">
            <FaSearch className="text-[#3d146d] mx-3 text-base" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mx-36">
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-white hover:rounded-full hover:border border-yellow-600 hover:p-3 p-4 rounded-md">
          <button className="text-[#3d146d] font-lg font-semibold">
            Overview
          </button>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-white hover:rounded-full hover:border border-yellow-600 hover:p-3 p-4 rounded-md">
          <button className="text-[#3d146d] font-lg font-semibold">
            About
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="relative py-4 px-6 border rounded-2xl border-[#3d146d]">
            <FaShareAlt className="text-[#3d146d] text-lg cursor-pointer hover:text-[#3d146d]" />
          </div>

          <div className="relative py-4 px-6 border rounded-2xl border-[#3d146d] transform translate3d(0px, 0px, 0px) scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d">
            <RiShoppingBag4Line className="text-[#3d146d] text-lg cursor-pointer hover:text-[#3d146d]" />
            <span className="absolute top-0 right-0 bg-[#e3d9ee] text-[#3d146d] border border-[#3d146d] text-xs hover:text-base hover:px-2 font-bold px-1.5 rounded-full">
              0
            </span>
          </div>
        </div>
        <div className="fixed right-16 p-5 px-6 border rounded-2xl bg-yellow-400 hover:p-6 border-[#3d146d] z-10">
          <FaEllipsisH className="text-[#3d146d] text-lg cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

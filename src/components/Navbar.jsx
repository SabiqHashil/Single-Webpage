import { CgMenuGridO } from "react-icons/cg";
import { FaShareAlt, FaEllipsisH, FaSearch } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex flex-nowrap items-center justify-between px-6 py-5 bg-yellow-50 w-full sm:mx-auto">
      <div className="flex items-center sm:items-start gap-4 sm:gap-7">
        <div className="flex items-center cursor-pointer gap-2 sm:gap-3 hover:bg-white hover:border border-[#3d146d] p-2 sm:p-3 rounded-lg transition-all duration-200 ease-in-out">
          <h1 className="text-xl sm:text-2xl font-bold text-[#3d146d]">
            Thema
          </h1>
          <h1 className="hidden sm:inline-block bg-yellow-400 text-xs sm:text-sm font-semibold text-[#3d146d] px-2 py-1 rounded">
            Home
          </h1>
        </div>

        <div className="flex items-center sm:items-start space-x-2 cursor-pointer hover:bg-yellow-200 hover:rounded-full hover:border border-yellow-600 hover:p-3 p-4 rounded-md">
          <CgMenuGridO className="text-[#3d146d] text-lg sm:text-xl" />
          <span className="text-[#3d146d] text-sm sm:text-base font-semibold">
            Courses
          </span>
        </div>

        <div className="hidden lg:flex items-start bg-white border border-[#3d146d] rounded-full px-4 py-1 my-2 shadow-sm">
          <input
            type="text"
            placeholder="Search courses, or instructors"
            className="flex-grow w-36 lg:w-60 text-xs sm:text-sm p-2 font-semibold bg-transparent text-[#3d146d] placeholder:text-[#3d146d] focus:outline-none"
          />

          <div className="p-2.5 border rounded-full border-[#966bc7] hover:border-[#3d146d]">
            <FaSearch className="text-[#966bc7] hover:text-[#3d146d] mx-3 text-sm sm:text-base" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mx-36">
        <div className="hidden sm:flex items-center space-x-2 cursor-pointer hover:bg-white hover:rounded-full hover:border-2 border-yellow-400 hover:shadow-yellow-200 hover:p-3 p-4 rounded-md">
          <button className="text-[#3d146d] text-sm sm:text-base font-semibold">
            Overview
          </button>
        </div>
        <div className="hidden sm:flex items-center space-x-2 cursor-pointer hover:bg-white hover:rounded-full hover:border-2 border-yellow-400 hover:shadow-yellow-200 hover:p-3 p-4 rounded-md">
          <button className="text-[#3d146d] text-sm sm:text-base font-semibold">
            About
          </button>
        </div>

        <div className="flex items-center sm:items-end space-x-4 sm:space-x-4">
          <div className="flex relative py-4 px-6 border items-center rounded-2xl border-[#3d146d] cursor-pointer">
            <FaShareAlt className="text-[#3d146d] text-base sm:text-lg" />
          </div>
          <div className="flex relative py-4 px-6 border items-center rounded-2xl border-[#3d146d] cursor-pointer">
            <RiShoppingBag4Line className="text-[#3d146d] text-base sm:text-lg" />
            <span className="absolute top-0 right-0 bg-[#e3d9ee] text-[#3d146d] border border-[#3d146d] text-xs sm:text-sm font-bold px-2 rounded-full">
              0
            </span>
          </div>
        </div>
        <div className="fixed right-16 p-5 px-6 border rounded-2xl bg-yellow-400 hover:p-6 sm:right-16 sm:p-5 hover:shadow-2xl border-[#3d146d] z-10">
          <FaEllipsisH className="text-[#3d146d] text-base sm:text-lg" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

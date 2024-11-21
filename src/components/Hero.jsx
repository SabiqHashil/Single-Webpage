import { IoMdArrowDown } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  return (
    <header className="text-center py-12 bg-white bg-opacity-70 mx-6 my-6 rounded-2xl">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#3d146d] font-semibold leading-normal">
          Education Template for
          <span className="inline-block">
            <img
              src="zigzag.png"
              alt="Zigzag decoration"
              className="inline-block w-[70%] sm:w-[80%] md:w-[90%] lg:w-[90%]"
            />
          </span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row whitespace-nowrap items-center justify-center space-x-0 sm:space-x-4 mt-6">
        <span className="inline-flex items-center mb-4 sm:mb-0">
          <img
            src="sun.png"
            alt="Sun decoration"
            className="inline-block mr-2 w-[100px] sm:w-[120px] h-[100px] sm:h-[120px]"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#3d146d] font-semibold leading-normal">
            an
          </h1>
        </span>
        <span className="inline-flex items-center relative mb-4 sm:mb-0">
          <img
            src="zigzag.png"
            alt="Zigzag decoration"
            className="inline-block w-[70%] sm:w-[80%] mt-10"
          />
          <span className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-normal text-[#692eaa] absolute top-1/2 transform -translate-y-1/2">
            Vibrant
          </span>
        </span>
        <span className="text-4xl sm:text-5xl lg:text-7xl text-[#3d146d] font-semibold leading-normal inline-flex items-center mx-0 my-0">
          and
        </span>
        <span className="inline-flex items-center relative">
          <img
            src="zigzag.png"
            alt="Zigzag decoration"
            className="inline-block w-[70%] sm:w-[80%] mt-10"
          />
          <span className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-normal text-[#692eaa] absolute top-1/2 transform -translate-y-1/2">
            Engaging
          </span>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mt-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#3d146d] font-semibold text-center leading-normal">
          Webflow Website
        </h1>
        <div className="flex justify-center sm:justify-start ml-0 sm:ml-6 my-5 gap-2">
          <img
            src="img1.webp"
            alt="Profile Image 1"
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg transform hover:scale-110 transition-all"
          />
          <img
            src="img2.webp"
            alt="Profile Image 2"
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg transform hover:scale-110 transition-all"
          />
          <img
            src="img3.webp"
            alt="Profile Image 3"
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover shadow-lg transform hover:scale-110 transition-all"
          />
        </div>
      </div>

      <p className="mt-4 text-base sm:text-lg text-center sm:mx-6 font-semibold text-[#3d146d]">
        See why Thema is the best pick for your site!
      </p>

      <div className="flex flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-[#3d146d] font-semibold text-white px-6 py-3 w-48 rounded-full flex items-center justify-center space-x-2 hover:bg-purple-700 transition-all duration-200 ease-in-out">
          <span className="text-sm">Explore Now |</span>
          <IoMdArrowDown className="text-xl" />
        </button>

        <button className="bg-yellow-500 font-semibold text-[#3d146d] px-6 py-3 w-48 rounded-full flex items-center justify-center space-x-2 hover:bg-yellow-600 transition-all duration-200 ease-in-out">
          <span className="text-sm">Buy Template |</span>
          <TiArrowRight className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Hero;

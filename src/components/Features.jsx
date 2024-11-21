const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:px-20 py-10 sm:py-10 bg-transparent mx-12">
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-5 text-center transform rotate-[-5deg] transition-transform duration-500 ease-in-out hover:rotate-[-5deg]">
        <h1 className="text-5xl font-bold text-[#3d146d]">3</h1>
        <p className="text-[#3d146d] text-xl font-semibold">
          main layout variations
        </p>
      </div>
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[5deg] transition-transform duration-500 ease-in-out hover:rotate-[-5deg]">
        <h1 className="text-5xl font-bold text-[#3d146d]">20</h1>
        <p className="text-[#3d146d] text-xl font-semibold">
          prebuilt static pages
        </p>
      </div>
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[-5deg] transition-transform duration-500 ease-in-out hover:rotate-[5deg]">
        <h1 className="text-5xl font-bold text-[#3d146d]">10</h1>
        <p className="text-[#3d146d] text-xl font-semibold">
          ready-made CMS pages
        </p>
      </div>
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[-5deg] transition-transform duration-500 ease-in-out hover:rotate-[5deg]">
        <h1 className="text-5xl font-bold text-[#3d146d]">50+</h1>
        <p className="text-[#3d146d] text-xl font-semibold">
          sections in the UI Kit
        </p>
      </div>
    </section>
  );
};

export default Features;

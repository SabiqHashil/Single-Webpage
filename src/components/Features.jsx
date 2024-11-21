const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-12 bg-transparent shadow-lg rounded-lg mx-6">
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[-5deg] transition-transform duration-500 ease-in-out hover:rotate-[-5deg]">
        <h1 className="text-5xl font-bold text-purple-600">3</h1>
        <p className="text-gray-600 text-xl font-semibold">
          main layout variations
        </p>
      </div>
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[5deg] transition-transform duration-500 ease-in-out hover:rotate-[-5deg]">
        <h1 className="text-5xl font-bold text-purple-600">20</h1>
        <p className="text-gray-600 text-xl font-semibold">
          prebuilt static pages
        </p>
      </div>
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[-5deg] transition-transform duration-500 ease-in-out hover:rotate-[5deg]">
        <h1 className="text-5xl font-bold text-purple-600">10</h1>
        <p className="text-gray-600 text-xl font-semibold">
          ready-made CMS pages
        </p>
      </div>
      <div className="bg-slate-50 bg-opacity-60 border border-gray-300 rounded-lg p-6 text-center transform rotate-[-5deg] transition-transform duration-500 ease-in-out hover:rotate-[5deg]">
        <h1 className="text-5xl font-bold text-purple-600">50+</h1>
        <p className="text-gray-600 text-xl font-semibold">
          sections in the UI Kit
        </p>
      </div>
    </section>
  );
};

export default Features;

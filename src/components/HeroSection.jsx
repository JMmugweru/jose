const HeroSection = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden" id="reviews">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/computer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="absolute left-3 h-[50dvh] lg:left-[20%] top-[30%] z-30 bg-[#101e22] bg-opacity-70 backdrop-blur-xl max-w-md sm:max-w-2xl lg:max-w-3xl shadow-lg shadow-black/50 border border-[#1a272b] p-4 rounded-lg flex flex-col justify-evenly">
          <div className="flex items-center gap-1 text-center">
            <span className="bg-[#fcc26d] w-[5px] h-[20px] rounded-2xl"></span>
            <h3 className="text-gray-200 text-base font-medium">Sales</h3>
          </div>
          <div className="grid gap-2">
            <h1 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl font-bold max-w[40ch]">
              All the skills you need in one place
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              From critical skills to technical topics, our platform supports
              your professional development.
            </p>
          </div>
          <div className="space-x-3 w-full">
            <button className="bg-[#fcc26d] text-black font-medium px-4 py-2 rounded-md">
              Book a demo
            </button>
            <button
              type="submit"
              className="bg-transparent text-gray-400 border border-gray-400 font-medium px-4 py-2 rounded-md"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

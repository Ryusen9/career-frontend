const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-slate-300 text-3xl md:text-5xl font-bold">
        Build and Ship a Job <br /> Board fast with Quality.
      </p>
      <label className="input mx-auto">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">ctrl</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <div className="flex gap-1.5 items-center justify-center text-center">
        <p className="text-sm text-slate-300 md:text-base">Popular jobs: </p>
        <div className="badge badge-sm md:badge-md">Web Development</div>
        <div className="badge badge-sm md:badge-md">Designer</div>
        <div className="badge badge-sm md:badge-md">Software Engineer</div>
      </div>
    </div>
  );
};

export default Hero;

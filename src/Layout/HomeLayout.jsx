import Hero from "../Components/Hero";
import HotJobs from "../Components/HotJobs";
import heroImage from "/Images/Hero.jpg";
const HomeLayout = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col gap-5 bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="my-2">
          <Hero />
        </div>
      </div>
      <div className="my-6">
        <HotJobs />
      </div>
    </>
  );
};

export default HomeLayout;

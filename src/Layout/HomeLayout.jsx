import Hero from "../Components/Hero";
import heroImage from "/Images/Hero.jpg";
const HomeLayout = () => {
  return (
    <div
      className="min-h-screen flex flex-col gap-5 bg-cover bg-center items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="my-2">
        <Hero />
      </div>
    </div>
  );
};

export default HomeLayout;

import Image from "next/image";
import { aboutData } from "../lib/data";

const About = () => {
  return (
    <div
      id="about"
      className="about-section h-screen flex flex-col justify-center items-center"
    >
      <div className="container md:container lg:container flex flex-col justify-center items-center">
        <div className="grid grid-cols-12 gap-4">
          {/* First column will take up 4 columns */}
          <div className="col-span-12 lg:col-span-5">
            <Image
              src={aboutData.image}
              alt={aboutData.imageAlt}
              className="about-avatar" // Add a class for styling
            />
          </div>

          {/* Second column will take up 8 columns */}
          <div className="col-span-12 lg:col-span-7">
            <div className="slider-container overflow-hidden">
              <div className="slider-content flex gap-16">
                <p className="about-slide text-9xl poppins-black">DESIGN</p>
                <p className="about-slide text-9xl poppins-black">CODE</p>
                <p className="about-slide text-9xl poppins-black">PLAY</p>
                <p className="about-slide text-9xl poppins-black">DESIGN</p>
                <p className="about-slide text-9xl poppins-black">CODE</p>
                <p className="about-slide text-9xl poppins-black">PLAY</p>
                {/* Duplicate content even more */}
                <p className="about-slide text-9xl poppins-black">DESIGN</p>
                <p className="about-slide text-9xl poppins-black">CODE</p>
                <p className="about-slide text-9xl poppins-black">PLAY</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 bg-white p-5 lg:px-32 lg:py-20 relative about-text rounded-md">
          <h1 className="lg:text-6xl poppins-bold mb-3">ME</h1>
          <p className="quicksand-regular">
            Hi, I’m Kayl Jeremiah Teves. Starting with graphic design and UI/UX,
            I’ve transitioned into full-stack development, crafting both
            websites and applications. My focus is on creating visually
            appealing and highly functional digital experiences. I blend design
            and coding to bring innovative ideas to life, ensuring seamless and
            engaging user interactions across various platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import { aboutData, aboutIcons } from "../lib/data";

const About = () => {
  return (
    <div
      id="about"
      className="overflow-hidden about-section h-screen flex flex-col justify-center items-center"
    >
      <div className="container md:container lg:container flex flex-col justify-center items-center px-5">
        <div className="grid grid-cols-12 gap-4">
          {/* First column will take up 4 columns */}
          <div className="col-span-12 lg:col-span-4">
            <Image
              src={aboutData.image}
              alt={aboutData.imageAlt}
              className="about-avatar"
            />
          </div>

          {/* Second column will take up 8 columns */}
          <div className="col-span-12 lg:col-span-8 hidden md:block">
            <div className="slider-container overflow-hidden">
              <div className="slider-content flex gap-16">
                {aboutData.slides.map((slide, index) => (
                  <p key={index} className="about-slide text-9xl poppins-black">
                    {slide}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 bg-white p-5 lg:px-32 lg:py-20 relative about-text rounded-md -mt-36 md:-mt-[28rem] lg:-mt-40">
          <h1 className="text-4xl lg:text-6xl poppins-bold mb-3">ME</h1>
          <p className="quicksand-regular">{aboutData.description}</p>

          <div className="flex justify-center grid grid-cols-3 items-center mt-3">
            {aboutIcons.map(({ name, imageSrc }) => (
              <div key={name} className="flex justify-center">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={100}
                  height={100}
                  className=" lg:hidden"
                />
                <Image
                  src={imageSrc}
                  alt={name}
                  width={200}
                  height={200}
                  className="lg:block hidden "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 block md:hidden">
          <div className="slider-container overflow-hidden">
            <div className="slider-content flex gap-16">
              {aboutData.slides.map((slide, index) => (
                <p key={index} className="about-slide text-9xl poppins-black">
                  {slide}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

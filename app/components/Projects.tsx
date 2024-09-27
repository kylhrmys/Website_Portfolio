import Image from "next/image";
import { aboutData } from "../lib/data";

const Projects = () => {
  return (
    <div className="overflow-hidden projects-section h-screen flex flex-col justify-center items-center">
      <div className="container md:container lg:container flex flex-col justify-center items-center px-5">
        <div className="">
          <h1 className="text-4xl lg:text-6xl poppins-bold mb-3 text-white text-center lg:text-start">
            PROJECTS
          </h1>
          <p className="text-white quicksand-regular text-center lg:text-start hidden md:block">
            Showcasing my personal projects, highlighting my expertise in
            full-stack development and design. Each project demonstrates my
            focus on creating functional and innovative solutions.
          </p>
          {/* grid grid-cols-1 lg:grid-cols-1 */}
          <div className="flex mt-10 md:px-10 lg:px-0 gap-5">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className="bg-purple-700 p-4 rounded-lg overflow-hidden lg:w-96 h-72 md:h-96 lg:h-72 flex">
                <div className="rounded-lg bg-white overflow-hidden">
                  <Image
                    src={aboutData.image}
                    alt={aboutData.imageAlt}
                    className=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-5 justify-center lg:justify-between lg:w-1/3 ">
                <div className="flex flex-col">
                  <p className="quicksand-regular text-white text-center lg:text-start">
                    The "GreenTech Innovation Hub" aims to accelerate
                    sustainable technology development in urban areas.
                  </p>
                  <div className="flex gap-3 mt-5 text-[12px] lg:justify-start lg:justify-start justify-center items-center mb-10 lg:mb-0">
                    <button className="px-7 py-1 bg-green-800 text-white quicksand-bold rounded-full">
                      DJANGO
                    </button>
                    <button className="px-7 py-1 bg-blue-400 text-white quicksand-bold rounded-full">
                      REACTJS
                    </button>
                  </div>
                </div>
                <button className="px-10 py-3 bg-white text-black quicksand-bold rounded-md ">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// components/Header.tsx
import Image from "next/image";
import { headerData } from "../lib/data"; // Adjust the path as needed

const Header = () => {
  return (
    <div className="header-section h-screen flex flex-col justify-center items-center">
      <div className="container md:container lg:container flex flex-col justify-center items-center">
        <div
          className="text-center text-white px-5 flex flex-col justify-center items-center"
          style={{ maxWidth: "850px" }}
        >
          <p className="lg:text-2xl mb-4 tracking-widest quicksand-regular text-2xl">
            {headerData.name}
          </p>
          {headerData.title.map((line, index) => (
            <h1
              key={index}
              className="text-4xl md:text-6xl lg:text-8xl hero-text poppins-black"
            >
              {line}
            </h1>
          ))}
          <p className="lg:mx-20 mt-4 quicksand-regular tracking-wider">
            {headerData.description}
          </p>
          <a
            href=""
            className="no-underline bg-purple-700 px-7 py-3 rounded-md mt-6 uppercase tracking-widest quicksand-regular"
          >
            {headerData.buttonText}
          </a>
          <a href="#about">
            <Image
              src={headerData.arrowImage}
              alt="Arrow Down" // Changed for better accessibility
              className="arrow-image mt-8" // Add a class for styling
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

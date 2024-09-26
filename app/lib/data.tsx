// app/lib/data.js

// Importing images
import githubLogo from "../public/Menu/github.png";
import linkedinLogo from "../public/Menu/linkedin.png";
import facebookLogo from "../public/Menu/facebook.png";
import instagramLogo from "../public/Menu/instagram.png";
import ArrowDown from "../public/Header/Header Arrow Down.png";
import NavLogo from "../public/Nav/Nav Logo.png";
import createvesLogo from "../public/Menu/createveslogo.png";
import avatarLogo from "../public/About me/About me avatar.png";

// Social media links
export const socialMediaLinks = [
  {
    name: "GITHUB",
    imageSrc: githubLogo,
    url: "https://github.com/kylhrmys", // Replace with your GitHub URL
  },
  {
    name: "LINKEDIN",
    imageSrc: linkedinLogo,
    url: "https://www.linkedin.com/in/kyltvs/", // Replace with your LinkedIn URL
  },
  {
    name: "FACEBOOK",
    imageSrc: facebookLogo,
    url: "https://www.facebook.com/profile.php?id=100083186330824", // Replace with your Facebook URL
  },
  {
    name: "INSTAGRAM",
    imageSrc: instagramLogo,
    url: "https://www.instagram.com/hrmyskyl/", // Replace with your Instagram URL
  },
];

export const createvesLogoData = {
  imageSrc: createvesLogo, // Path to the logo image
  name: "CREATEVES", // Name for the logo
};

// Navbar data
export const navbarData = {
  logo: NavLogo,
  logoAlt: "Logo",
};

// Header data
export const headerData = {
  name: "KAYL TEVES",
  title: ["CREATIVITY", "MEETS", "CODE"],
  description: `Turn your ideas into high-performance solutions. I combine design
  and coding to craft sleek apps, powerful websites, and custom
  software. From concept to launch, every detail is crafted to make
  your vision shine.`,
  buttonText: "Collaboration",
  arrowImage: ArrowDown,
};

// About data
export const aboutData = {
  image: avatarLogo,
  imageAlt: "Avatar",
};

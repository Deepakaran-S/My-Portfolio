import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuopen, setIsMenuopen] = useState(false);
  return (
    <div className=" fixed bg-black top-0 left-0 w-full z-50 grid grid-cols-3  h-20 py-4 justify-center items-center px-10  ">
      <div>
        <img src="src/assets/Signature 3.png" className="h-14 pt-2 " alt="" />
      </div>

      <div>
        <ul className="md:flex gap-6 hidden  items-center justify-center py-2 text-white ">
       <Link to="home" smooth={true} duration={500}>  <li className="hover:text-gray-400 cursor-pointer">Home</li> </Link>  
        <Link to="projects" smooth={true} duration={500}>  <li className="hover:text-gray-400 cursor-pointer">Projects</li> </Link>  
        <Link to="aboutme" smooth={true} duration={500}>  <li className="hover:text-gray-400 cursor-pointer">About Me</li> </Link>  
        <Link to="contact" smooth={true} duration={500}>  <li className="hover:text-gray-400 cursor-pointer">Contact</li> </Link>     
        </ul>
      </div>

      <div className="flex  items-end justify-end">
        <div className=" md:flex hidden gap-6 ">
          <a
            href="https://www.linkedin.com/in/deepakaran-s/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-70 transition"
            />
          </a>
          <a
            href="https://github.com/Deepakaran-S"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/github.svg"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-70 transition"
            />
          </a>
          <a
            href="https://www.behance.net/maddys4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/behance.svg"
              alt="Behance"
              className="w-6 h-6 hover:opacity-70 transition"
            />
          </a>
        </div>

        <div className="flex items-center justify-center md:hidden ml-4">
          <button onClick={() => setIsMenuopen(!isMenuopen)}>
            {isMenuopen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                className="w-8 h-8 cursor-pointer "
              >
                <path
                  fill="currentColor"
                  d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                width="1em"
                height="1em"
                className="w-8 h-8 cursor-pointer "
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuopen && (
  <div className="absolute top-20 left-0 w-full bg-black  z-40 px-6 py-4">
    <ul className="flex flex-col gap-4 text-sm text-white">
      <Link to="home" smooth={true} duration={500}><li className="hover:text-gray-300 cursor-pointer">Home</li></Link>  
      <Link to="projects" smooth={true} duration={500}><li className="hover:text-gray-300 cursor-pointer">Projects</li></Link>  
      <Link to="aboutme" smooth={true} duration={500}><li className="hover:text-gray-300 cursor-pointer">About Me</li></Link>  
      <Link to="contact" smooth={true} duration={500}><li className="hover:text-gray-300 cursor-pointer">Contact</li></Link>  
    </ul>
  </div>
)}

    </div>
  );
};

export default Header;

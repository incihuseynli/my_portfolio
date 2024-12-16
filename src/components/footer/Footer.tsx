import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm text-white/70">Copyright &copy; 2024. <span className="text-[#CBACF9]">Inci Huseynli</span>.</p>
      <div className="flex items-center justify-center gap-3">
        <Link
          href="https://www.linkedin.com/in/inci-huseynli-3a8b9a1b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:text-[#CBACF9] transition duration-300 ease-in-out"
        >
          Linkedin 
        </Link>
        <span>|</span>
        <Link
          href="https://www.linkedin.com/in/inci-huseynli-3a8b9a1b3/"
          target="_blank"
          rel="noopener noreferrer"
           className="text-sm font-medium hover:text-[#CBACF9] transition duration-300 ease-in-out"
        >
          Linkedin
        </Link>
        <span>|</span>

        <Link
          href="https://www.linkedin.com/in/inci-huseynli-3a8b9a1b3/"
          target="_blank"
          rel="noopener noreferrer"
           className="text-sm font-medium hover:text-[#CBACF9] transition duration-300 ease-in-out"
        >
          Linkedin
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

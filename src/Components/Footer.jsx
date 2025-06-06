import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-neutral-800 py-6 px-4">
      <div className="w-full mx-auto  items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm text-gray-600 dark:text-neutral-400 text-center">
          &copy; {new Date().getFullYear()} Deepakaran S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

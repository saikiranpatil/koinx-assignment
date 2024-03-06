import { useState } from "react";

import { logo } from "../assets";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { navLinks } from "../constants";
import styles from "../style";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} ${styles.flexCenter} bg-white shadow-md shadow-black-5`}>
      <div className={`${styles.boxWidth}`}>
        <div className="w-full flex justify-between items-center">

          <img src={logo} alt="KoinX" className="w-[90px] h-[68px]" />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`font-inter text-black-10 font-bold  cursor-pointer text-[16px] mr-10`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
            <button className="bg-gradient-to-r from-primary-6/80 to-primary-6 text-white font-semibold px-4 py-2 rounded-md">
              Get Started
            </button>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div className="flex justify-center items-center cursor-pointer">
              {
                toggle ?
                  <RxCross2
                    className="w-[28px] h-[28px] object-contain text-black-8"
                    onClick={() => setToggle((prev) => !prev)}
                  /> :
                  <IoMenuOutline
                    className="w-[28px] h-[28px] object-contain text-black-8"
                    onClick={() => setToggle((prev) => !prev)}
                  />
              }
            </div>

            <div className={`${toggle ? "flex" : "hidden"} w-[100vw] bg-black-5 p-6  absolute top-[3.8rem] right-0 my-2 min-w-[140px]`}>
              <ul className="list-none flex flex-col justify-start items-center flex-1">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className={"font-inter text-black-10 font-bold  cursor-pointer text-[16px] mb-4"}
                  >
                    <a href={`#${navLink.id}`}>{navLink.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
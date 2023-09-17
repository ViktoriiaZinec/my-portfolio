import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";

import { styles } from "../styles";
import { navLinks, navIcons } from "../constants";
import { menu, close } from "../assets/svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollVertical = window.scrollY;
      if (scrollVertical > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ x: 0, y: 0 });
  }, [controls]);

  return (
    <nav
      className={`${
        styles.paddingX
      }  w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "menu-gradient" : "bg-transparent"
      } transition duration-150 ease-in-out`}
    >
      <div className="flex w-full justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-3  "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            initial={{ x: -800, y: -600 }}
            animate={controls}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <p className="font-['Dancing_Script'] text-[30px] hover:text-sky-200 leading-none cursor-pointer text-white max-lg:block">
              Viktoriia Zaitseva
            </p>
          </motion.div>
        </Link>
        <div className="flex flex-end gap-8 items-center   max-lg:flex-col max-lg:gap-4 max-lg:items-center">
          <ul className="list-none hidden sm:flex flex-row gap-8 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-sky-200" : "text-white"
                } hover:text-sky-200 text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
            {navIcons.map((media) => (
              <li key={media.id} className="h-9 w-9">
                <a href={media.link} target="_blank" rel="noopener noreferrer">
                  <media.icon className="text-white w-8 h-8 hover:text-sky-200 cursor-pointer " />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[32px] h-[32px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <motion.div
            initial={{ opacity: 0.7, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 40 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 menu-gradient absolute top-16 right-0 mx-4 my-2 rounded-xl min-w-[140px] z-10 flex-col gap-4`}
          >
            <ul className="list-none flex justify-end flex-col items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-sky-200" : "text-white"
                  } hover:text-sky-200 text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <ul className="list-none flex justify-between">
              {navIcons.map((media) => (
                <li key={media.id}>
                  <a
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {
                      <media.icon className="text-white w-6 h-6 hover:text-sky-200 cursor-pointer " />
                    }
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

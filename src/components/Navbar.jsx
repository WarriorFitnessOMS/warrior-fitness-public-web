import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/LOGO.png";
import Topbar from "./Topbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  // 🔹 Detect current visible section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // offset for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "stories", label: "Success Stories" },
    { id: "achivements", label: "Achievements" },
    { id: "faq", label: "FAQ" },
    { id: "store", label: "Store" },
    { id: "calculators", label: "Calculators" },
  ]



  return (
    <header className="w-full fixed top-0 z-50">
        
      <Topbar />

      {/* 🔹 Main Navbar */}
      <nav className="text-white flex justify-between items-center px-6 md:px-26 py-3 bg-black/20 backdrop-blur-md">

        {/* Logo */}
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold">
            <span className="text-red-600">WARRIOR</span> <br /> FITNESS
          </h1>
          <img src={logo} alt="Warrior Fitness Logo" className="h-20 w-20 object-contain" />
        </div>

        <div className="flex items-center gap-10">

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-medium">

            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-orange-600 font-semibold"
                      : "hover:text-orange-600"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <div className="hidden lg:block">
            <button 
                className="bg-orange-600 border-2 border-orange-600 text-white px-8 py-2 rounded-md 
                            hover:bg-transparent transition-all duration-200 cursor-pointer active:bg-orange-600"
            >
              LOGIN
            </button>
          </div>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* 🔹 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/25 backdrop-blur-md text-white flex flex-col gap-8 py-4 px-6 text-center h-screen">
          {navLinks.map((item,id) => (
            <a
              key={id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-orange-500 ${
                activeSection === item.id ? "text-orange-500 font-semibold" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="bg-orange-600 border-2 border-orange-600 text-white px-8 py-2 rounded-md
                            hover:bg-transparent transition-all duration-200 cursor-pointer active:bg-orange-600">LOGIN</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

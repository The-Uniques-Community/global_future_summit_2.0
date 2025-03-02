import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import imgg from "../assets/ideate.png"; // Ensure this path is correct

const Navbar2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-16 md:h-20 flex justify-center font-[Poppins] transition-all duration-300 ease-in-out z-50 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="w-[85%] h-full flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={imgg} alt="Logo" className="h-12 md:h-16" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul
              className={`flex space-x-6 xl:space-x-10 px-4 ${
                isScrolled ? "text-gray-700" : "text-white"
              } font-medium text-lg py-3 transition-all duration-300`}
            >
              {[
                { to: "home", label: "Global Future Summit 2.0" },
                { to: "about", label: "About" },
                { to: "theme", label: "Objective" },
                { to: "timeline", label: "Timeline" },
                { to: "prize-pool", label: "Prizes" },
              ].map((item, index) => (
                <li key={index} className="cursor-pointer relative group">
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust for fixed navbar
                    className="cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                  <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#4285f4] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* RSVP Button & Mobile Menu Toggle */}
          <div className="flex items-center">
            <a
              href="https://gdg.community.dev/events/details/google-gdg-on-campus-swami-vivekanand-institute-of-engineering-technology-chandigarh-india-presents-google-ideate-20-student-innovation-challenge-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex px-6 py-2 text-white font-medium text-lg bg-[#4285F4] hover:bg-[#155DFC] transition-all rounded-lg"
            >
              RSVP Now
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className={`p-2 lg:hidden rounded-full ${
                isScrolled ? "bg-[#0B7798]" : "bg-white/20 backdrop-blur-md"
              } transition-all duration-300`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="text-black" size={24} />
              ) : (
                <Menu className="text-white" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex mt-18 flex-col gap-10 py-4 px-6">
          <ul className="flex flex-col space-y-4 font-medium text-[16px]">
            {[
              { to: "home", label: "Global Future Summit 2.0" },
              { to: "about", label: "About" },
              { to: "theme", label: "Objective" },
              { to: "timeline", label: "Timeline" },
              { to: "prize-pool", label: "Prizes" },
            ].map((item, index) => (
              <li key={index} className="border-b border-gray-200 pb-2">
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-[#0B7798] transition-colors"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <a
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-swami-vivekanand-institute-of-engineering-technology-chandigarh-india-presents-google-ideate-20-student-innovation-challenge-2025/"
            target="_blank"
            rel="noopener noreferrer"

            className="mt-6 w-full  text-center py-2 text-white font-medium text-lg bg-[#4285F4] hover:bg-[#357ABD] transition-all rounded-lg"
          >
            Join Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar2;

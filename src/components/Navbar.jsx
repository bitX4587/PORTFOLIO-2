import { useEffect, useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTimeout = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Clear existing timeout
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Set timeout to close menu after 3 seconds of scroll inactivity
      if (menuOpen) {
        scrollTimeout.current = setTimeout(() => {
          setMenuOpen(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b-2 border-gray-400 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            <a href="#">Codex Intel</a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-600">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-0 right-0 z-50 w-full h-full pointer-events-none"
          >
            {/* Floating Icons - Absolutely Positioned */}
            <div className="absolute top-24 right-6 flex flex-col gap-5 pointer-events-auto">
              {[
                { href: "#about", icon: <FaUser /> },
                { href: "#projects", icon: <FaProjectDiagram /> },
                { href: "#contact", icon: <FaEnvelope /> },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white text-xl rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaGamepad,
  FaLayerGroup,
  FaBan,
} from "react-icons/fa";
import project1 from "../assets/Graduates-Ebook.png";
import project2 from "../assets/Art-Gallery.png";
import project3 from "../assets/Information Hub.png";
import project4 from "../assets/Anime Website.png";
import project5 from "../assets/Nails, Beauty and Beyond.png";
import project6 from "../assets/Computer Match Making Game.png";
import project7 from "../assets/Food Match Making Game.png";
import project8 from "../assets/Map Game.png";
import project9 from "../assets/Clothing Apparel.png";
import project10 from "../assets/My Recipe.jpg";
import project11 from "../assets/Platformer Game.png";
import project12 from "../assets/E-Homes 5 Apartment.png";

export default function Projects() {
  const [filterCategory, setFilterCategory] = useState("all");

  const projects = [
    {
      title: "Graduates E-book",
      description:
        "A social platform designed for graduates to connect, share memories, and access digital yearbooks. Built with React, Node.js for authentication, MongoDB for the database, and Cloudinary for image storing it offers a seamless and interactive experience for alumni networking.",
      image: project1, // replace with your actual import
      category: "web",
      link: "https://graduates-ebook-management.vercel.app/",
    },
    {
      title: "Art Gallery System",
      description:
        "A mobile-responsive web platform for managing and showcasing digital artworks. Features include admin-curated galleries, artist submissions, image uploads, and category-based filtering. Built using PHP, SQL, and Bootstrap.",
      image: project2, // Replace with your actual image import
      category: "web",
      link: "http://art-gallery-system.is-great.org/",
    },
    {
      title: "Information Hub System",
      description:
        "A centralized web-based platform for managing and distributing organizational announcements, events, and resources. Built with PHP, MySQL, and Bootstrap, this system streamlines information sharing and ensures users stay informed in real-time.",
      image: project3, // replace with your actual import if needed
      category: "web",
      link: "https://information-hub-system.great-site.net/",
    },
    {
      title: "Anime World",
      description:
        "A visually engaging anime website crafted using HTML, JavaScript, and vanilla CSS. It features categorized anime collections, detailed series pages, and a sleek, responsive design without relying on any frameworks.",
      image: project4, // Replace with your actual image import
      category: "web",
      link: "#", // Replace with your actual link
    },
    {
      title: "Hair, Nails and Beyond",
      description:
        "A modern salon and e-commerce website designed for booking beauty services and showcasing product offerings. Built with PHP, SQL, and Tailwind CSS, it includes admin controls, secure bookings, and email notifications via PHPMailer.",
      image: project5, // Replace with your actual image import
      category: "web",
      link: "https://hair-nails-and-beyond.is-best.net/", // Replace with your actual link
    },
    {
      title: "Computer Matchmaking Game",
      description:
        "A fun and interactive matchmaking game that pairs virtual characters based on compatibility logic. Designed as an educational project with engaging UI, logical conditions, and randomized pairing. Built with Pygame and Sublime Text.",
      image: project6, // Replace with the appropriate imported image
      category: "game",
      link: "#", // Replace with your actual game link
    },
    {
      title: "Food Matchmaking Game",
      description:
        "A fun browser-based game where players match foods based on themes or compatibility rules. Designed with simple logic and engaging visuals to enhance user interaction. Built using Pygame and Sublime Text.",
      image: project7, // Replace with the correct imported image
      category: "game",
      link: "#", // Replace with your actual game link
    },
    {
      title: "Map Game",
      description:
        "An interactive geography-based game where players identify countries, cities, or landmarks on a map. Designed to be educational and engaging, it challenges spatial memory and location knowledge. Built using Pygame and Sublime Text.",
      image: project8, // Replace with your actual imported image
      category: "game",
      link: "#", // Replace with your actual link
    },
    {
      title: "Clothing Apparel",
      description:
        "A modern e-commerce platform for showcasing and selling clothing and fashion products. Features responsive design, product listings, and a user-friendly interface. Built using HTML, CSS, JavaScript, and PHP.",
      image: project9, // Replace with your actual imported image
      category: "web", // or "mobile" if it's a mobile-first design
      link: "#", // Replace with your actual live link
    },
    {
      title: "My Recipe",
      description:
        "A personal recipe notes application designed for organizing, storing, and editing recipes. Features image support, OCR Scanner, offline capability, search/filter options, and a user-friendly interface. Built with React Native, SQLite, and Expo for Android devices.",
      image: project10, // Replace with your actual imported image
      category: "mobile", // since it's an app
      link: "#", // Replace with your actual live link or GitHub repo
    },
    {
      title: "Platformer Alien Game",
      description:
        "A 2D platformer game built using Python and Pygame, featuring an alien character navigating through obstacles and enemies. Developed and tested in Sublime Text, this game showcases core game development concepts like physics, collisions, and sprite animations.",
      image: project11, // Replace with your actual imported image
      category: "game",
      link: "#", // Replace with your actual live link or GitHub repo
    },
    {
      title: "E-Homes 5 Apartment",
      description:
        "A rental management system built using PHP, MySQL, and Bootstrap for managing tenant information, unit availability, rent payments, and receipts. Features include admin login, CRUD operations, unit assignment with availability tracking, automated rent due monitoring, and PDF receipt generation. Designed for ease of use and efficient apartment management.",
      image: project12, // Replace with your actual imported image
      category: "web",
      link: "https://e-homes-5-apartment.great-site.net/src/index.php", // Replace with your actual live link or GitHub repo
    },

    // Add more projects here as needed
  ];

  const filteredProjects =
    filterCategory === "all"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  return (
    <section id="projects" className="scroll-mt-12 py-16 px-4 bg-black">
      <h2 className="text-3xl font-bold text-center text-blue-700">
        Featured Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 overflow-x-auto my-12 px-2">
        {[
          { label: "All", value: "all", icon: <FaLayerGroup /> },
          { label: "Web Dev", value: "web", icon: <FaLaptopCode /> },
          { label: "Mobile Dev", value: "mobile", icon: <FaMobileAlt /> },
          { label: "Game Dev", value: "game", icon: <FaGamepad /> },
        ].map(({ label, value, icon }) => (
          <button
            key={value}
            onClick={() => setFilterCategory(value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 whitespace-nowrap ${
              filterCategory === value
                ? "bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            {icon}
            <span className="hidden md:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={`${filterCategory}-${index}`}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-300 border border-transparent hover:border-blue-500"
          >
            {/* Image + Link */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} project`}
                  className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-full p-2 hover:bg-blue-600 transition duration-300 shadow-md group"
                >
                  <FiExternalLink className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
                </a>
              ) : (
                <div
                  title="Link not available"
                  className="absolute bottom-2 right-2 bg-gray-600/60 backdrop-blur-sm rounded-full p-2 cursor-not-allowed shadow-md"
                >
                  <FaBan className="text-white text-lg opacity-70" />
                </div>
              )}
            </div>

            {/* Description */}
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

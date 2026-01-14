import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { RiFlowChart } from "react-icons/ri";
import { MdSensors } from "react-icons/md";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaGamepad,
  FaLayerGroup,
  FaBan,
  FaTerminal,
  FaBrush,
} from "react-icons/fa";

// import { FaFunnelDollar } from "react-icons/fa";

import project10 from "../assets/My Recipe.jpg";

import project25 from "../assets/AI Assisted PATHFIT System DFD.jpg";
import project26 from "../assets/Burial Smart Tracking System DFD.png";

import project6 from "../assets/Computer Match Making Game.png";
import project7 from "../assets/Food Match Making Game.png";
import project8 from "../assets/Map Game.png";
import project11 from "../assets/Platformer Game.png";

import project39 from "../assets/Fire Alarm Detector.png";
import project40 from "../assets/Weather Station.png";
import project41 from "../assets/CO2 Concentration Indicator.png";
import project42 from "../assets/Obstacle Detector.png";
import project43 from "../assets/Hello World 16 x 2.png";

import project44 from "../assets/art-gallery-system.png";
import project45 from "../assets/e-homes-5-apartment.png";
import project46 from "../assets/hair-nails-and-beyond.png";
import project47 from "../assets/mark-daniel-partoza-portfolio-v-1.png";
import project48 from "../assets/org-merch.png";

import project1 from "../assets/Graduates-Ebook.png";
import project2 from "../assets/Art-Gallery.png";
import project3 from "../assets/Information Hub.png";
import project4 from "../assets/Anime Website.png";
import project5 from "../assets/Nails, Beauty and Beyond.png";
import project9 from "../assets/Clothing Apparel.png";
import project12 from "../assets/E-Homes 5 Apartment.png";
import project13 from "../assets/Website Editor.png";
import project14 from "../assets/OrgMerch Website.png";
import project15 from "../assets/Document Management System.png";
import project16 from "../assets/jasonAI.png";
import project17 from "../assets/Loot At Loom.png";
import project18 from "../assets/Mark's Personal Website.png";
import project19 from "../assets/Susana's Personal Website.png";
import project20 from "../assets/SmartFoodRestaurant.png";
import project21 from "../assets/Student Database System.jpg";
import project22 from "../assets/Twitter Clone.png";
import project23 from "../assets/Youtube Clone.png";
import project24 from "../assets/Unique Personal Website.png";

import project27 from "../assets/QueenState.png";
import project28 from "../assets/Alerts.png";
import project29 from "../assets/Tkinter Form.png";
import project30 from "../assets/Grin Program.png";
import project31 from "../assets/Grammar.png";
import project32 from "../assets/Java Problems.png";
import project33 from "../assets/I AM C++.png";
import project34 from "../assets/My Animal Dictionary.png";
import project35 from "../assets/Personal Data.png";
import project36 from "../assets/Mutant RPG.png";
import project37 from "../assets/Registration.png";
import project38 from "../assets/ChatBot.png";

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
      title: "Hair, Nails and Beyond",
      description:
        "A modern salon and e-commerce website designed for booking beauty services. Built with PHP, MySQL, and Tailwind CSS, it includes admin controls, secure bookings, and email notifications via PHPMailer.",
      image: project5, // Replace with your actual image import
      category: "web",
      link: "https://hair-nails-and-beyond.is-best.net/", // Replace with your actual link
    },
    {
      title: "OrgMerch Website",
      description:
        "A mobile-responsive e-commerce website for selling organization merchandise. Features include admin and user accounts, product listings, detailed product pages, and a checkout system. Built using PHP, MySQL, and Bootstrap.",
      image: project14, // Replace with your actual image import
      category: "web",
      link: "https://org-merch.great-site.net/",
    },
    {
      title: "E-Homes 5 Apartment",
      description:
        "A rental management system built using PHP, MySQL, and Bootstrap for managing tenant information, unit availability, rent payments, and receipts. Features include admin login, CRUD operations, unit assignment with availability tracking, automated rent due monitoring, and PDF receipt generation. Designed for ease of use and efficient apartment management.",
      image: project12, // Replace with your actual imported image
      category: "web",
      link: "https://e-homes-5-apartment.great-site.net/src/index.php", // Replace with your actual live link or GitHub repo
    },
    {
      title: "Information Hub System",
      description:
        "A centralized web-based platform for managing organizational/personal resources and also include a notes vault for privacy. Built with PHP, MySQL, and Bootstrap, this system helps create information with ease.",
      image: project3, // replace with your actual import if needed
      category: "web",
      link: "https://information-hub-system.great-site.net/",
    },
    {
      title: "Art Gallery System",
      description:
        "A mobile-responsive web platform for managing and showcasing digital artworks. Features include admin login, artist submissions and image uploads. Built using PHP, MySQL, and Bootstrap.",
      image: project2, // Replace with your actual image import
      category: "web",
      link: "http://art-gallery-system.is-great.org/",
    },
    {
      title: "Website Editor",
      description:
        "A drag-and-drop website editor that allows users to visually design responsive web pages in real time. Built with React, Vite, and Tailwind CSS, it includes resizable and draggable components, live HTML export, and device preview modes.",
      image: project13, // replace with your actual import if needed
      category: "web",
      link: "https://website-editor-liard.vercel.app/",
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
      title: "Clothing Apparel",
      description:
        "A modern e-commerce platform for showcasing and selling clothing and fashion products. Features responsive design, product listings, and a user-friendly interface. Built using HTML, CSS, JavaScript, and PHP.",
      image: project9, // Replace with your actual imported image
      category: "web", // or "mobile" if it's a mobile-first design
      link: "#", // Replace with your actual live link
    },
    {
      title: "Document Management System",
      description:
        "A web-based document management system designed to organize, upload, and manage digital files efficiently. The system focuses on usability, secure access, and structured document handling for academic or office environments.",
      image: project15,
      category: "web",
      link: "#",
    },
    {
      title: "JasonAI Web Application",
      description:
        "An AI-powered web application that provides intelligent responses and assistance through a clean and modern user interface. Built to demonstrate API integration, UI responsiveness, and real-time interaction.",
      image: project16,
      category: "web",
      link: "#",
    },
    {
      title: "Loot At Loom",
      description:
        "An e-commerce-style web platform showcasing product listings with an engaging layout and user-friendly navigation. The project emphasizes modern UI design, responsiveness, and frontend best practices.",
      image: project17,
      category: "web",
      link: "#",
    },
    {
      title: "Mark's Personal Website",
      description:
        "A personal portfolio website created to highlight skills, projects, and background information. Designed with a clean layout, responsive structure, and professional presentation for personal branding.",
      image: project18,
      category: "web",
      link: "#",
    },
    {
      title: "Susana's Personal Website",
      description:
        "A custom personal website built to showcase individual achievements, projects, and profile details. The site focuses on simplicity, visual clarity, and responsive design.",
      image: project19,
      category: "web",
      link: "#",
    },
    {
      title: "SmartFood Restaurant Website",
      description:
        "A modern restaurant website featuring menu presentation, service details, and a visually appealing layout. Built to demonstrate responsive design and user-friendly navigation for food businesses.",
      image: project20,
      category: "web",
      link: "#",
    },
    {
      title: "Student Database System",
      description:
        "A web-based student database system designed to manage student records efficiently. The project demonstrates CRUD operations, structured data handling, and basic system management features.",
      image: project21,
      category: "web",
      link: "#",
    },
    {
      title: "Twitter Clone",
      description:
        "A Twitter-inspired web application replicating core social media features such as posting, feeds, and user interactions. Built to showcase frontend logic, UI structure, and dynamic content rendering.",
      image: project22,
      category: "web",
      link: "#",
    },
    {
      title: "YouTube Clone",
      description:
        "A YouTube-style web platform focusing on video layout, content feeds, and responsive design. This project highlights UI replication, layout structuring, and modern frontend techniques.",
      image: project23,
      category: "web",
      link: "#",
    },
    {
      title: "Unique Personal Website",
      description:
        "A creatively designed personal website with a unique layout and visual identity. Built to stand out through custom styling, responsiveness, and modern web design principles.",
      image: project24,
      category: "web",
      link: "#",
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
      title: "Map Game",
      description:
        "An interactive geography-based game where players identify countries, cities, or landmarks on a map. Designed to be educational and engaging, it challenges spatial memory and location knowledge. Built using Pygame and Sublime Text.",
      image: project8, // Replace with your actual imported image
      category: "game",
      link: "#", // Replace with your actual link
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
      title: "Platformer Alien Game",
      description:
        "A 2D platformer game built using Python and Pygame, featuring an alien character navigating through obstacles and enemies. Developed and tested in Sublime Text, this game showcases core game development concepts like physics, collisions, and sprite animations.",
      image: project11, // Replace with your actual imported image
      category: "game",
      link: "#", // Replace with your actual live link or GitHub repo
    },
    {
      title: "Fire Alarm Detector System",
      description:
        "An IoT-based fire alarm detection system designed to sense fire-related conditions and trigger alerts. This project demonstrates sensor integration, real-time monitoring, and safety-focused system design.",
      image: project39,
      category: "iot",
      link: "#",
    },
    {
      title: "Weather Station System",
      description:
        "An IoT weather station that collects and displays environmental data such as temperature and humidity. Built to demonstrate sensor data acquisition, monitoring, and basic environmental analysis.",
      image: project40,
      category: "iot",
      link: "#",
    },
    {
      title: "CO₂ Concentration Indicator",
      description:
        "A sensor-based system that measures and indicates carbon dioxide concentration levels. Designed to showcase real-time data sensing, threshold detection, and environmental monitoring concepts.",
      image: project41,
      category: "iot",
      link: "#",
    },
    {
      title: "Obstacle Detection System",
      description:
        "An IoT obstacle detection project using sensors to identify nearby objects. This system demonstrates distance measurement, real-time feedback, and basic automation principles.",
      image: project42,
      category: "iot",
      link: "#",
    },
    {
      title: "16x2 LCD Hello World Display",
      description:
        "A basic IoT hardware project displaying a 'Hello World' message on a 16x2 LCD screen. Built to demonstrate microcontroller interfacing, LCD communication, and fundamental hardware programming.",
      image: project43,
      category: "iot",
      link: "#",
    },
    {
      title: "Queen State Problem Solver",
      description:
        "A command-line program that solves the classic Queen State problem, demonstrating logical problem-solving, algorithm design, and state evaluation using structured programming concepts.",
      image: project27,
      category: "cli",
      link: "#",
    },
    {
      title: "Alert Management System",
      description:
        "A console-based alert management program designed to simulate notifications and message handling. Built to demonstrate conditional logic, user input handling, and program flow.",
      image: project28,
      category: "cli",
      link: "#",
    },
    {
      title: "Tkinter Form Application",
      description:
        "A simple form-based application built using Python and Tkinter, focusing on input validation, basic UI components, and event-driven programming concepts.",
      image: project29,
      category: "cli",
      link: "#",
    },
    {
      title: "Grin Program",
      description:
        "A console-based program designed to demonstrate string manipulation and user interaction. This project highlights fundamental programming concepts and clean input-output handling.",
      image: project30,
      category: "cli",
      link: "#",
    },
    {
      title: "Grammar Checker Program",
      description:
        "A command-line grammar checking tool that analyzes text input for basic grammatical structure. Built to showcase string parsing, logical validation, and text processing techniques.",
      image: project31,
      category: "cli",
      link: "#",
    },
    {
      title: "Java Practice Problems",
      description:
        "A collection of Java console programs solving common programming challenges. Designed to strengthen problem-solving skills, logic building, and core Java syntax understanding.",
      image: project32,
      category: "cli",
      link: "#",
    },
    {
      title: "I AM C++",
      description:
        "A C++ console-based project demonstrating fundamental programming concepts including variables, control structures, functions, and basic object-oriented principles.",
      image: project33,
      category: "cli",
      link: "#",
    },
    {
      title: "Animal Dictionary Program",
      description:
        "A console-based dictionary application that allows users to look up animal information. Built to demonstrate data storage, retrieval logic, and user interaction in a CLI environment.",
      image: project34,
      category: "cli",
      link: "#",
    },
    {
      title: "Personal Data Manager",
      description:
        "A command-line personal data management program designed to store and display user information securely. This project focuses on structured input handling and data organization.",
      image: project35,
      category: "cli",
      link: "#",
    },
    {
      title: "Mutant RPG Console Game",
      description:
        "A text-based role-playing game built for the command line, featuring character interactions, turn-based mechanics, and game logic flow using conditional statements.",
      image: project36,
      category: "cli",
      link: "#",
    },
    {
      title: "User Registration System",
      description:
        "A console-based registration system that handles user input, validation, and data storage logic. Built to demonstrate form-like behavior in a command-line environment.",
      image: project37,
      category: "cli",
      link: "#",
    },
    {
      title: "ChatBot Console Application",
      description:
        "A simple chatbot program running in the command line that responds to user input based on predefined rules. Designed to showcase conditional logic and conversational flow.",
      image: project38,
      category: "cli",
      link: "#",
    },
    {
      title: "AI-Assisted PATHFIT System DFD",
      description:
        "A data flow diagram (DFD) illustrating the structure and process of an AI-assisted PATHFIT system. The diagram visualizes data movement, system components, and interactions to support clear system analysis and design.",
      image: project25,
      category: "diagram",
      link: "#",
    },
    {
      title: "Burial AI Tracking System DFD",
      description:
        "A detailed data flow diagram representing a smart burial tracking system. Designed to illustrate system processes, data storage, and user interactions for effective system planning and documentation.",
      image: project26,
      category: "diagram",
      link: "#",
    },
    // {
    //   title: "Art Gallery System Funnel",
    //   description:
    //     "A visually driven art gallery funnel website designed to guide users through artwork discovery and engagement. Focused on layout hierarchy, visual storytelling, and conversion-oriented user flow.",
    //   image: project44,
    //   category: "design",
    //   link: "#",
    // },
    // {
    //   title: "E-Homes 5 Apartment Funnel",
    //   description:
    //     "A conversion-focused landing funnel for an apartment rental system. Designed to highlight property details, pricing, and call-to-action elements to streamline tenant inquiries and bookings.",
    //   image: project45,
    //   category: "design",
    //   link: "#",
    // },
    // {
    //   title: "Hair, Nails, and Beyond Funnel",
    //   description:
    //     "A modern beauty service funnel website built to promote salon services and drive bookings. Emphasizes visual branding, service clarity, and customer conversion through structured sections.",
    //   image: project46,
    //   category: "design",
    //   link: "#",
    // },
    // {
    //   title: "Mark Daniel Partoza Portfolio v1",
    //   description:
    //     "The first version of a personal portfolio funnel designed to present skills, projects, and background in a clear conversion-oriented layout. Focused on personal branding and professional presentation.",
    //   image: project47,
    //   category: "design",
    //   link: "#",
    // },
    // {
    //   title: "Organization Merchandise Funnel",
    //   description:
    //     "A merchandise funnel website designed to showcase organizational products and encourage purchases. Built with attention to product presentation, call-to-action placement, and responsive design.",
    //   image: project48,
    //   category: "design",
    //   link: "#",
    // },

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
      <div className="my-12 px-2">
        <div className="flex gap-4 overflow-x-auto md:justify-center">
          {[
            { label: "All", value: "all", icon: <FaLayerGroup /> },
            { label: "Web Dev", value: "web", icon: <FaLaptopCode /> },
            { label: "Mobile Dev", value: "mobile", icon: <FaMobileAlt /> },
            { label: "Game Dev", value: "game", icon: <FaGamepad /> },
            { label: "IoT and Simulation", value: "iot", icon: <MdSensors /> },
            { label: "CLI Codes", value: "cli", icon: <FaTerminal /> },
            { label: "Diagrams", value: "diagram", icon: <RiFlowChart /> },
            { label: "Designs", value: "design", icon: <FaBrush /> },
          ].map(({ label, value, icon }) => (
            <button
              key={value}
              onClick={() => setFilterCategory(value)}
              className={`flex items-center gap-2 px-4 py-2 min-w-max rounded-full
          border transition-all duration-300 whitespace-nowrap
          ${
            filterCategory === value
              ? "bg-blue-600 text-white"
              : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        {filteredProjects.length === 0 ? (
          /* Empty State Label */
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700">
              No projects available
            </h3>
            <p className="text-gray-500 mt-2">
              Projects for this category will be added soon.
            </p>
          </div>
        ) : (
          /* Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        )}
      </div>
    </section>
  );
}

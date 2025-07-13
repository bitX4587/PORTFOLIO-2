import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
  FaBootstrap,
  FaDatabase,
  FaGit,
  FaGithub,
  FaUnity,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiSqlite,
  SiMongodb,
  SiPostman,
  SiExpo,
  SiGodotengine,
  SiPycharm,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";
import { GiPaintBrush } from "react-icons/gi";
import { MdOutlineBrush } from "react-icons/md";
import { TbBrandVisualStudio } from "react-icons/tb";

import profile from "../assets/MARK.jpg";

export default function About() {
  const iconClass =
    "text-4xl sm:text-5xl hover:scale-150 transition-transform duration-300 cursor-pointer";

  return (
    <section
      id="about"
      className="scroll-mt-6 py-20 px-6 sm:px-10 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
        About Me
      </h2>

      {/* Image + Text Row */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-center w-full lg:w-1/2"
        >
          <img
            src={profile}
            alt="Mark Daniel Marbella Partoza"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Bio and Resume Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            I'm <strong>Mark Daniel Marbella Partoza</strong>, a passionate web
            developer with over <strong>5 years</strong> of experience crafting
            high-impact websites, games and applications. I specialize in
            creating responsive, user-friendly interfaces using modern web
            technologies and frameworks.
          </p>
          <p className="text-gray-700 text-lg mb-12 lg:mb-8 text-left">
            My mission is to help businesses and individuals turn ideas into
            reality through clean code, thoughtful design, and scalable
            solutions.
          </p>

          <a
            href="/resume.docx"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-blue-600 my-12 text-center">
          Tech Stack
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 justify-items-center text-gray-700">
          {/* Languages */}
          <FaHtml5 className={`${iconClass} text-[#E34F26]`} title="HTML" />
          <FaCss3Alt className={`${iconClass} text-[#1572B6]`} title="CSS" />
          <FaJs className={`${iconClass} text-[#F7DF1E]`} title="JavaScript" />
          <SiTypescript
            className={`${iconClass} text-[#3178C6]`}
            title="TypeScript"
          />
          <FaPhp className={`${iconClass} text-[#777BB4]`} title="PHP" />
          <FaPython className={`${iconClass} text-[#3776AB]`} title="Python" />

          {/* Frameworks */}
          <FaReact className={`${iconClass} text-[#61DAFB]`} title="React" />
          <SiTailwindcss
            className={`${iconClass} text-[#38BDF8]`}
            title="Tailwind CSS"
          />
          <FaBootstrap
            className={`${iconClass} text-[#7952B3]`}
            title="Bootstrap"
          />
          <SiExpress className={`${iconClass} text-white`} title="Express.js" />
          <SiExpo className={`${iconClass} text-white`} title="Expo" />

          {/* Databases */}
          <SiMysql className={`${iconClass} text-[#4479A1]`} title="MySQL" />
          <SiSqlite className={`${iconClass} text-[#003B57]`} title="SQLite" />
          <SiFirebase
            className={`${iconClass} text-[#FFCA28]`}
            title="Firebase and Firestore"
          />
          <SiMongodb
            className={`${iconClass} text-[#47A248]`}
            title="MongoDB"
          />
          <FaDatabase
            className={`${iconClass} text-gray-500`}
            title="PostgreSQL"
          />

          {/* Tools */}
          <VscVscode
            className={`${iconClass} text-[#007ACC]`}
            title="VS Code"
          />
          <FaGit className={`${iconClass} text-[#F05032]`} title="Git" />
          <FaGithub className={`${iconClass} text-white`} title="GitHub" />
          <SiPostman
            className={`${iconClass} text-[#FF6C37]`}
            title="Postman"
          />

          {/* Game Dev */}
          <FaUnity className={`${iconClass} text-gray-100`} title="Unity" />
          <SiGodotengine
            className={`${iconClass} text-[#478CBF]`}
            title="Godot"
          />
          <SiPycharm
            className={`${iconClass} text-green-300`}
            title="Pycharm & Pygame"
          />
          <TbBrandCpp className={`${iconClass} text-blue-400`} title="C++" />
          <FaCuttlefish className={`${iconClass} text-green-500`} title="C" />

          {/* Creative Tools */}
          <SiAdobephotoshop
            className={`${iconClass} text-blue-400`}
            title="Adobe Photoshop"
          />
          <SiAdobeillustrator
            className={`${iconClass} text-orange-500`}
            title="Adobe Illustrator"
          />
          <GiPaintBrush
            className={`${iconClass} text-pink-400`}
            title="IbisPaint"
          />
          <MdOutlineBrush
            className={`${iconClass} text-purple-500`}
            title="Krita"
          />
          <TbBrandVisualStudio
            className={`${iconClass} text-indigo-400`}
            title="Visual Basic & Visual Studio"
          />
        </div>
      </motion.div>
    </section>
  );
}

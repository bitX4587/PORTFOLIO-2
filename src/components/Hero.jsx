import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Web Designer",
  "Web Freelancer",
  "Frontend Engineer",
  "Full-Stack Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-12 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 text-white"
      >
        Mark Daniel Marbella Partoza
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
      >
        Creative Freelancer —{" "}
        <motion.span
          key={currentRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-blue-600 font-semibold"
        >
          {roles[currentRole]}
        </motion.span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 flex flex-row flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="px-5 py-2 sm:px-6 sm:py-3 rounded-full bg-blue-600 text-white text-sm sm:text-base font-semibold hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
        >
          Hire Me
        </a>

        <a
          href="#projects"
          className="px-5 py-2 sm:px-6 sm:py-3 rounded-full border border-blue-600 text-blue-600 text-sm sm:text-base font-semibold hover:bg-blue-600 hover:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
        >
          View Projects
        </a>
      </motion.div>
    </section>
  );
}

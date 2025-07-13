import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import ProgressBar from "./components/ProgressBar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Chatbot from "./components/Chatbot";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <ProgressBar />}
      {!isLoading && (
        <>
          <div className="min-h-screen bg-black text-gray-800">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
            <Chatbot />
          </div>
        </>
      )}
    </div>
  );
}

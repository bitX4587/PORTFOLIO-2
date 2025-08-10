import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaReddit,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-12 py-12 px-4 bg-black text-white"
    >
      <h2 className="text-3xl font-bold mb-10 text-blue-700 text-center">
        Contact Us
      </h2>

      {/* Grid for Form and Map */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Form */}
        <form
          action="https://formsubmit.co/da542dba6b4b0589021c077f4e4bc6da"
          method="POST"
          className="grid gap-4"
        >
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700 h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Google Map Embed */}
        <div className="w-full h-64 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4832078405084!2d124.58737327510836!3d12.079036788160296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309deac255b0feb%3A0x78b17158c984c61!2sDagum%20P.4%20Rd.%2C%20Barangay%20Dagum%2C%20Samar!5e0!3m2!1sen!2sph!4v1752400375650!5m2!1sen!2sph"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section: Social Icons Only */}
      <div className="mt-12 w-full flex justify-center flex-wrap gap-4 text-xl text-blue-400 lg:gap-12 lg:text-2xl">
        <a href="mailto:partozamark2005@gmail.com" title="Gmail">
          <FaEnvelope className="hover:text-white transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-daniel-partoza-71499530b"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="hover:text-white transition" />
        </a>
        <a
          href="https://www.fiverr.com/markdaniel04"
          target="_blank"
          rel="noopener noreferrer"
          title="Fiverr"
        >
          <TbBrandFiverr className="hover:text-white transition" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577984500578"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebook className="hover:text-white transition" />
        </a>
        <a
          href="https://www.instagram.com/llemaurc/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram className="hover:text-white transition" />
        </a>
        <a
          href="https://www.reddit.com/user/llemaurc/"
          target="_blank"
          rel="noopener noreferrer"
          title="Reddit"
        >
          <FaReddit className="hover:text-white transition" />
        </a>
      </div>
    </section>
  );
}

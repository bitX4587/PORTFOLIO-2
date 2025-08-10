import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    quote:
      "Mark transformed our online presence with a sleek, fast, and professional website. Highly recommended!",
    name: "Jane Smith",
    role: "CEO at BrightTech",
  },
  {
    quote:
      "Working with Mark was a seamless experience. The end product exceeded our expectations.",
    name: "John Doe",
    role: "Founder at DevHub",
  },
  {
    quote:
      "His attention to detail and clean code helped our platform scale faster than we imagined.",
    name: "Sarah Lee",
    role: "CTO at StartupCraft",
  },
  {
    quote:
      "Reliable, skilled, and always ahead of deadlines. Mark is a joy to work with!",
    name: "Alex Kim",
    role: "Manager at CodePath",
  },
  {
    quote:
      "Hey bro. I got 95 grade not bad. Pasado naman. The website/database you created was great. I would recommend you to my friends if  need nila. Thankyou again for helping me. 🎉👍🏼",
    name: "Arnel Adora",
    role: "MAPPUA student",
  },
];

export default function Testimonials() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 20 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
    autoplay: true,
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  return (
    <section className="py-16 px-4 bg-black scroll-mt-12" id="testimonials">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Testimonials
      </h2>
      <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            className="keen-slider__slide bg-white/10 text-white border border-white/20 backdrop-blur-lg rounded-xl p-6 w-full shadow-md"
            key={idx}
          >
            <p className="italic text-sm text-gray-200 mb-4">“{item.quote}”</p>
            <p className="font-semibold text-blue-400">
              – {item.name}, {item.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

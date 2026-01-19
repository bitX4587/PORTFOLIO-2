import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    quote:
      "Thank you Mark and welcome to the team, my friend. I am excited to have you officially on board.",
    name: "Rask",
    role: "Manager at LOOT OF THE LOOM",
  },
  {
    quote: "Sige po, sama nyo nadin po dun sa explanation HAHA! Thank youu po!",
    name: "Sheena",
    role: "Student",
  },
  {
    quote: "Solid po ng progress sir! Salamat!",
    name: "Kobe",
    role: "Student",
  },
  {
    quote: "Ang galing sir, salamat po.",
    name: "Jesmane",
    role: "Student",
  },
  {
    quote: "Nice, Thankyouuuuusooomuchhh ya",
    name: "Paul",
    role: "Student",
  },
  {
    quote:
      "Hey bro. I got 95 grade not bad. Pasado naman. The website/database you created was great. I would recommend you to my friends if  need nila. Thankyou again for helping me. 🎉👍🏼",
    name: "Arnel",
    role: "Student",
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

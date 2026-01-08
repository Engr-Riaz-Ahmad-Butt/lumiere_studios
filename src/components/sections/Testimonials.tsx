import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Chen",
    wedding: "Tuscan Villa Wedding",
    date: "September 2024",
    quote:
      "Lumière Studios didn't just photograph our wedding—they captured our souls. Every image makes us fall in love all over again. The team was so intuitive, knowing exactly when to be present and when to fade into the background.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma & David Wright",
    wedding: "Coastal Elegance",
    date: "June 2024",
    quote:
      "We've looked at our photos every single day since receiving them. The way Elena and her team captured the light, the emotions, and those tiny moments we didn't even notice—it's pure magic. Worth every penny.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica & Robert Taylor",
    wedding: "Garden Romance",
    date: "May 2024",
    quote:
      "From the first consultation to receiving our stunning album, the experience was flawless. They made us feel like celebrities and delivered images that belong in a magazine. Truly exceptional artists.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
            Love Letters
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Words From
            <br />
            <span className="text-gradient-gold italic">Our Couples</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-10 sm:w-16 h-10 sm:h-16 text-primary/20 absolute top-4 sm:top-8 left-4 sm:left-8" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6 justify-center">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-center leading-relaxed mb-6 sm:mb-8 italic"
              >
                "{current.quote}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                key={`author-${current.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <p className="font-display text-base sm:text-lg font-semibold text-gradient-gold">
                  {current.name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {current.wedding} • {current.date}
                </p>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <button
                onClick={prev}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

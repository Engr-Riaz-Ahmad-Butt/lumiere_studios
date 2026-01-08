import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Heart } from "lucide-react";
import photographerImage from "@/assets/photographer.jpg";

const stats = [
  { number: "500+", label: "Weddings Captured" },
  { number: "12", label: "Years Experience" },
  { number: "50+", label: "Awards Won" },
  { number: "100%", label: "Happy Couples" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-charcoal-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={photographerImage}
                alt="Our lead photographer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-card border border-border rounded-lg p-4 sm:p-6 shadow-elegant hidden md:block"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="font-display text-lg sm:text-2xl font-semibold text-gradient-gold">
                  500+
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Love stories captured
              </p>
            </motion.div>

            {/* Decorative Frame */}
            <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 border-l-2 border-t-2 border-primary/30" />
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-20 sm:w-32 h-20 sm:h-32 border-r-2 border-b-2 border-primary/30" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
              About Lumière Studios
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4 mb-4 sm:mb-6">
              Where Artistry
              <br />
              <span className="text-gradient-gold italic">Meets Emotion</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              For over a decade, Lumière Studios has been the trusted choice for
              couples seeking more than just photographs—they seek visual poetry
              that tells their unique love story.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Founded by award-winning photographer Elena Marchetti, our team
              combines technical excellence with an intuitive understanding of
              human emotion. We don't just capture moments; we preserve feelings,
              glances, and the unspoken connections that make your day truly
              special.
            </p>

            {/* Feature Icons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Photography</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Film className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Cinematography</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="font-display text-2xl sm:text-3xl font-semibold text-gradient-gold">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wedding couple at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-medium tracking-widest uppercase mb-4 sm:mb-6 text-xs sm:text-sm"
          >
            Premium Wedding & Portrait Photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold leading-[0.9] mb-6 sm:mb-8"
          >
            Capturing
            <br />
            <span className="text-gradient-gold italic">Timeless</span>
            <br />
            Moments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mb-8 sm:mb-10"
          >
            We transform your most precious moments into stunning visual
            stories that you'll treasure for a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Start Your Journey
            </Button>
            <Button variant="elegant" size="lg" className="w-full sm:w-auto gap-2">
              <Play size={18} className="fill-current" />
              Watch Showreel
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-8 sm:right-20 text-primary/20 font-display text-6xl sm:text-8xl lg:text-9xl font-bold hidden lg:block">
        L
      </div>
    </section>
  );
};

export default Hero;
